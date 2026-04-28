import { Component, OnInit } from '@angular/core';
import { monstieAilmentIconMap, monstieElementIconMap, monstieStrengthIconMap, monstieTypeIconMap } from 'src/models/asset-map.model';
import { Monstie, MonstieAilment, MonstieElement, MonstieGenus, MonstieStatus, MonstieType } from 'src/models/monstie.model';
import { stories3save1 } from 'src/models/saves.model';
import { MonstieService } from 'src/monstie-service.service';

@Component({
  selector: 'app-monstie-table',
  templateUrl: './monstie-table.component.html',
  styleUrls: ['./monstie-table.component.css']
})
export class MonstieTableComponent implements OnInit {
  constructor(private readonly monstieService: MonstieService) {}
  MonstieStatus = MonstieStatus;
  MonstieElement = MonstieElement;
  MonstieAilment = MonstieAilment;
  MonstieType = MonstieType;

  allMonsties: Monstie[] = [];
  monsties: Monstie[] = [];
  currentHover: MonstieGenus | null = null;
  showOwned: boolean = true;
  showSeen: boolean = true;
  showUnknown: boolean = false;

  stickyMonstie: Monstie | null = null;

  elementList: MonstieElement[] = Object.values(MonstieElement);
  ailmentList: MonstieAilment[] = Object.values(MonstieAilment);

  monstieTypeIconMap = monstieTypeIconMap;
  monstieElementIconMap = monstieElementIconMap;
  monstieAilmentIconMap = monstieAilmentIconMap;
  monstieStrengthIconMap = monstieStrengthIconMap;

  ngOnInit(): void {
    const defaultMonsties: Monstie[] = this.monstieService.getStories3Monsties(stories3save1);
    // this.allMonsties = defaultMonsties;
    this.setTableMonsties(defaultMonsties);

    // TODO: Or have the header show the information for the hover/sticky target
    // TODO: Move all this init into stuff that can be called there
    // TODO: Allow save editing, so need a way of adding monsties without spoilers, and saving/editing that in session storage, save data in the code would be default
    // TODO: Add toggles in the header to show/hide owned, unowned, or all monsties
    // TODO: Add element display for MHS3, probably by refactoring the type section to be a vertical stack
    // TODO: Replace static background color with border color, make duller when unowned vs owned, probably static for unknown when those are shown
    // col-xs-12 col-sm-6 col-md-2 col-lg-1"
  }

  setTableMonsties(monsties: Monstie[]): void {
    this.monsties = this.updateDisplay(monsties)
      .sort((a, b) => (a.name > b.name ? -1 : 1))
      .sort((a, b) => (a.genus > b.genus ? -1 : 1));
  }

  onFilterChange(): void {
    this.setTableMonsties(this.monsties);
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

  getMonstieBorderStyle(genus: MonstieGenus): any {
    // console.log('getBorderStyle', genus);

    let color = '';
    if (genus === MonstieGenus.AMPHIBIAN) {
      color = 'red';
    }
    if (genus === MonstieGenus.BIRD_WYVERN) {
      color = 'blue';
    }
    if (genus === MonstieGenus.BRUTE_WYVERN) {
      color = 'green';
    }
    if (genus === MonstieGenus.FANGED_BEAST) {
      color = 'yellow';
    }
    if (genus === MonstieGenus.FANGED_WYVERN) {
      color = 'purple';
    }
    if (genus === MonstieGenus.FLYING_WYVERN) {
      color = 'orange';
    }
    if (genus === MonstieGenus.HERBIVORE) {
      color = 'brown';
    }
    if (genus === MonstieGenus.LEVIATHAN) {
      color = 'white';
    }
    if (genus === MonstieGenus.PISCINE_WYVERN) {
      color = 'teal';
    }
    if (genus === MonstieGenus.TEMNOCERAN) {
      color = 'aliceBlue';
    }
    if (genus === MonstieGenus.UNKNOWN) {
      color = 'black';
    }
    return color;
  }

  updateDisplay(monsties: Monstie[]): Monstie[] {
    let ret = monsties.map(monstie => ({ ...monstie, canDisplay: this.canDisplay(monstie) }));
    // console.log(ret.map(m => ({ name: m.name, canDisplay: m.canDisplay })));
    return ret;
  }

  canDisplay(monstie: Monstie): boolean {
    // console.log('canDisplay', monstie);

    if (monstie.genus === MonstieGenus.NON_CAPTURABLE) {
      return true;
    } else {
      return (
        (monstie.status === MonstieStatus.OWNED && this.showOwned) ||
        (monstie.status === MonstieStatus.SEEN && this.showSeen) ||
        (monstie.status === MonstieStatus.UNKNOWN && this.showUnknown)
      );
    }
    return false;
  }
}
