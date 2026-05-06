import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { NgClass } from '@angular/common';
import { MonstieStatus, MonstieElement, MonstieAilment, MonstieType, Monstie, MonstieGenus } from '../../models/monstie.model';
import { MonstieService } from '../../monstie.service';
import {
  monstieGenusColorMap,
  monstieGenusColorMapDull,
  monstieTypeIconMap,
  monstieElementIconMap,
  monstieAilmentIconMap,
  monstieStrengthIconMap,
  monstieGenusSortMap
} from '../../models/asset-map.model';
import { combineLatestWith, startWith } from 'rxjs/operators';
import { Store } from '@ngxs/store';
import { MonstieDexState } from '../../store/monstie-dex/monstie-dex.state';
import { Stories3MonstieName } from '../../models/monstie-list.stories3.model';
import { LoadFromDefaultModel } from '../../store/monstie-dex/monstie-dex.actions';

export enum HeaderControlName {
  SHOW_OWNED = 'showOwned',
  SHOW_SEEN = 'showSeen',
  SHOW_UNKNOWN = 'showUnknown',
  SHOW_SPOILERS = 'showSpoilers',
  SEARCH_TERM = 'searchTerm'
}

@Component({
  selector: 'app-monstie-table',
  templateUrl: './monstie-table.component.html',
  styleUrls: ['./monstie-table.component.css'],
  imports: [FormsModule, ReactiveFormsModule, NgClass, NgbModule]
})
export class MonstieTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('introModal') introModal!: ElementRef;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private readonly monstieService: MonstieService,
    private readonly ngbModal: NgbModal,
    private readonly store: Store,
    private readonly cdr: ChangeDetectorRef
  ) {}
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
    [HeaderControlName.SHOW_OWNED]: new FormControl<boolean>(true),
    [HeaderControlName.SHOW_SEEN]: new FormControl<boolean>(true),
    [HeaderControlName.SHOW_UNKNOWN]: new FormControl<boolean>(false),
    [HeaderControlName.SHOW_SPOILERS]: new FormControl<boolean>(false),
    [HeaderControlName.SEARCH_TERM]: new FormControl<string>('')
  });
  stickyMonstie: Monstie | null = null;

  get showOwnedControl(): FormControl<boolean> {
    return this.filterForm.get(HeaderControlName.SHOW_OWNED) as FormControl<boolean>;
  }

  get showSeenControl(): FormControl<boolean> {
    return this.filterForm.get(HeaderControlName.SHOW_SEEN) as FormControl<boolean>;
  }

  get showUnknownControl(): FormControl<boolean> {
    return this.filterForm.get(HeaderControlName.SHOW_UNKNOWN) as FormControl<boolean>;
  }

  get showSpoilersControl(): FormControl<boolean> {
    return this.filterForm.get(HeaderControlName.SHOW_SPOILERS) as FormControl<boolean>;
  }

  get searchTermControl(): FormControl<string> {
    return this.filterForm.get(HeaderControlName.SEARCH_TERM) as FormControl<string>;
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
    this.store.dispatch(LoadFromDefaultModel);
    this.subscriptions.add(
      this.store
        .select(MonstieDexState.getMonstieStatuses)
        .pipe(combineLatestWith(this.filterForm.valueChanges.pipe(startWith(this.filterForm.getRawValue()))))
        .subscribe({
          next: ([monstieStatusMap, valueChanges]) => {
            console.log(monstieStatusMap, valueChanges);
            this.updateMonsties(monstieStatusMap);
            this.cdr.markForCheck();
          }
        })
    );
  }

  ngAfterViewInit(): void {
    const showModal: boolean = this.store.selectSnapshot(MonstieDexState.getShowIntroModal);
    if (showModal) {
      this.ngbModal.open(this.introModal, {
        centered: true,
        backdrop: 'static',
        keyboard: true
      });
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  updateMonsties(monstieStatuses: Partial<Record<Stories3MonstieName, MonstieStatus>>): void {
    if (!monstieStatuses) {
      return;
    }
    this.monstiesFromSave = this.monstieService.getStories3Monsties(monstieStatuses);

    const formValue = this.filterForm.value;
    const searchTerm: string = formValue.searchTerm?.trim() || '';
    const filteredMonsties: Monstie[] = this.monstiesFromSave.filter((monstie: Monstie): boolean => {
      if (!searchTerm?.length) {
        return true;
      }
      if (searchTerm.match(/[\+\&]/g)) {
        return searchTerm.split(/[\+\&]/g)?.every(term => this.filterMonstie(monstie, term, true));
      } else {
        return searchTerm.split(/[\,\|]/g)?.some(term => this.filterMonstie(monstie, term, false));
      }
    });

    // Sort the filtered list
    this.monsties = this.sortTableMonsties(
      filteredMonsties,
      formValue.showOwned ?? true,
      formValue.showSeen ?? true,
      formValue.showUnknown ?? false
    );

    if (this.stickyMonstie) {
      const foundSticky = this.monsties.find(m => m.name === this.stickyMonstie?.name);
      if (!foundSticky) {
        this.clearSticky();
      }
    }
  }

  filterMonstie(monstie: Monstie, searchTerm: string, defaultWhenEmpty: boolean): boolean {
    const trimmedTerm: string = searchTerm.trim();
    if (!trimmedTerm.length) {
      return defaultWhenEmpty;
    } else if (!isNaN(parseInt(trimmedTerm.replace(/ /g, '')))) {
      return [...trimmedTerm.replace(/ /g, '')].map(char => parseInt(char, 10)).includes(monstie.star);
    } else {
      const nameMatches: boolean = monstie.name.toLowerCase().includes(trimmedTerm.toLowerCase());
      const genusMatches: boolean = monstie.genus.toLowerCase().includes(trimmedTerm.toLowerCase());
      const typeMatches: boolean = monstie.type.toLowerCase().includes(trimmedTerm.toLowerCase());
      const starMatches: boolean = parseInt(trimmedTerm) === monstie.star;
      const elementMatches: boolean = monstie.elements.some((element: string): boolean =>
        element.toLowerCase().includes(trimmedTerm.toLowerCase())
      );
      return nameMatches || genusMatches || typeMatches || elementMatches || starMatches;
    }
  }

  sortTableMonsties(monsties: Monstie[], showOwned: boolean, showSeen: boolean, showUnknown: boolean): Monstie[] {
    return this.updateCanDisplay(monsties, showOwned, showSeen, showUnknown).sort((a: Monstie, b: Monstie): number => {
      // Sort by genus first
      if (a.genus !== b.genus) {
        const genusOrderA = monstieGenusSortMap.get(a.genus) ?? 0;
        const genusOrderB = monstieGenusSortMap.get(b.genus) ?? 0;

        return genusOrderA - genusOrderB;
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
    //this.searchTermControl.setValue('');
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

    if (monstie.genus === MonstieGenus.UNKNOWN) {
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
