import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  monstieAilmentIconMap,
  monstieElementIconMap,
  monstieGenusColorMap,
  monstieGenusColorMapDull,
  monstieStrengthIconMap,
  monstieTypeIconMap
} from 'src/models/asset-map.model';
import { Monstie, MonstieAilment, MonstieElement, MonstieGenus, MonstieStatus, MonstieType } from 'src/models/monstie.model';
import { stories3save1 } from 'src/models/saves.model';
import { MonstieService } from 'src/monstie.service';

@Component({
  selector: 'app-monstie-table',
  templateUrl: './monstie-table.component.html',
  styleUrls: ['./monstie-table.component.css']
})
export class MonstieTableComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription();

  constructor(private readonly monstieService: MonstieService) {}
  MonstieStatus = MonstieStatus;
  MonstieElement = MonstieElement;
  MonstieAilment = MonstieAilment;
  MonstieType = MonstieType;

  allMonsties: Monstie[] = [];
  monsties: Monstie[] = [];
  monstiesFromSave: Monstie[] = [];
  sortedMonsties: Monstie[] = [];
  filteredMonsties: Monstie[] = [];
  currentHover: MonstieGenus | null = null;
  filterForm = new FormGroup({
    showOwned: new FormControl<boolean>(true),
    showSeen: new FormControl<boolean>(true),
    showUnknown: new FormControl<boolean>(false),
    showSpoilers: new FormControl<boolean>(false),
    searchTerm: new FormControl<string>('')
  });
  stickyMonstie: Monstie | null = null;

  get showOwnedControl(): FormControl<boolean> {
    return this.filterForm.get('showOwned') as FormControl<boolean>;
  }

  get showSeenControl(): FormControl<boolean> {
    return this.filterForm.get('showSeen') as FormControl<boolean>;
  }

  get showUnknownControl(): FormControl<boolean> {
    return this.filterForm.get('showUnknown') as FormControl<boolean>;
  }

  get showSpoilersControl(): FormControl<boolean> {
    return this.filterForm.get('showSpoilers') as FormControl<boolean>;
  }

  get searchTermControl(): FormControl<string> {
    return this.filterForm.get('searchTerm') as FormControl<string>;
  }

  elementList: MonstieElement[] = Object.values(MonstieElement);
  ailmentList: MonstieAilment[] = Object.values(MonstieAilment);

  monstieGenusColorMap = monstieGenusColorMap;
  monstieGenusColorMapDull = monstieGenusColorMapDull;
  monstieTypeIconMap = monstieTypeIconMap;
  monstieElementIconMap = monstieElementIconMap;
  monstieAilmentIconMap = monstieAilmentIconMap;
  monstieStrengthIconMap = monstieStrengthIconMap;

  ngOnInit(): void {
    this.monstiesFromSave = this.monstieService.getStories3Monsties(stories3save1);
    // this.allMonsties = defaultMonsties;

    // Set up subscription for reactive updates
    this.subscriptions.add(this.filterForm.valueChanges.subscribe(() => this.updateMonsties()));

    this.updateMonsties();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  updateMonsties(): void {
    const formValue = this.filterForm.value;
    const searchTerm: string = formValue.searchTerm || '';
    const showOwned: boolean = formValue.showOwned ?? true;
    const showSeen: boolean = formValue.showSeen ?? true;
    const showUnknown: boolean = formValue.showUnknown ?? false;

    // Filter by search term
    const filteredMonsties: Monstie[] = this.monstiesFromSave.filter((monstie: Monstie): boolean => {
      const nameMatches: boolean = monstie.name.toLowerCase().includes(searchTerm.toLowerCase());
      const genusMatches: boolean = monstie.genus.toLowerCase().includes(searchTerm.toLowerCase());
      const typeMatches: boolean = monstie.type.toLowerCase().includes(searchTerm.toLowerCase());
      const elementMatches: boolean = monstie.elements.some((element: string): boolean =>
        element.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return nameMatches || genusMatches || typeMatches || elementMatches;
    });

    // Sort the filtered list
    this.monsties = this.sortTableMonsties(filteredMonsties, showOwned, showSeen, showUnknown);
  }

  sortTableMonsties(monsties: Monstie[], showOwned: boolean, showSeen: boolean, showUnknown: boolean): Monstie[] {
    return this.updateCanDisplay(monsties, showOwned, showSeen, showUnknown).sort((a: Monstie, b: Monstie): number => {
      // Sort by genus first
      if (a.genus !== b.genus) {
        return a.genus > b.genus ? -1 : 1;
      }
      // Then by star (high to low)
      return (b.star ?? 0) - (a.star ?? 0);
    });
  }

  setHover(monstie: Monstie): void {
    // console.log('setHover', monstie);
    this.currentHover = monstie.genus;
  }

  removeHover(monstie: Monstie): void {
    // console.log('removeHover', monstie);
    this.currentHover = null;
  }

  setStickyMonstie(monstie: Monstie): void {
    // console.log('setSticky', monstie);
    this.stickyMonstie = monstie;
  }

  clearSticky(): void {
    // console.log('clearSticky');
    this.stickyMonstie = null;
  }

  updateCanDisplay(monsties: Monstie[], showOwned: boolean, showSeen: boolean, showUnknown: boolean): Monstie[] {
    let ret: Monstie[] = monsties.map(
      (monstie: Monstie): Monstie => ({ ...monstie, canDisplay: this.canDisplay(monstie, showOwned, showSeen, showUnknown) })
    );
    // console.log(ret.map(m => ({ name: m.name, canDisplay: m.canDisplay })));
    return ret;
  }

  canDisplay(monstie: Monstie, showOwned: boolean, showSeen: boolean, showUnknown: boolean): boolean {
    // console.log('canDisplay', monstie);

    if (monstie.genus === MonstieGenus.NON_CAPTURABLE) {
      return true;
    } else {
      return (
        (monstie.status === MonstieStatus.OWNED && showOwned) ||
        (monstie.status === MonstieStatus.SEEN && showSeen) ||
        (monstie.status === MonstieStatus.UNKNOWN && showUnknown)
      );
    }
    return false;
  }

  getMonstieBackgroundColor(monstie: Monstie): string {
    const colorMap = monstie.status === MonstieStatus.OWNED ? this.monstieGenusColorMap : this.monstieGenusColorMapDull;
    return colorMap[monstie.genus];
  }
}
