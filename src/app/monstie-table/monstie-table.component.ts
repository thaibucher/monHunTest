import { Component, OnInit } from '@angular/core';
import { Stories3MonstieName } from 'src/models/monstie-list.stories3.model';
import {
  Monstie,
  MonstieAilment,
  MonstieElement,
  MonstieGenus,
  MonstieStatus,
  MonstieStrength,
  MonstieType
} from 'src/models/monstie.model';
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

  monsties: Monstie[] = [];
  currentHover: MonstieGenus | null = null;
  hideUnowned: boolean = true;
  stickyMonstie: Monstie | null = null;

  elementList = Object.values(MonstieElement);
  ailmentList = Object.values(MonstieAilment);

  monstieTypeIconMap: Record<MonstieType, string> = {
    [MonstieType.POWER]: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d3/MHST2-Power_Type.svg',
    [MonstieType.SPEED]: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d9/MHST2-Speed_Type.svg',
    [MonstieType.TECH]: 'https://static.wikia.nocookie.net/monsterhunter/images/5/5b/MHST2-Technical_Type.svg',
    [MonstieType.UNKNOWN]: '/assets/unknownType.png'
  };

  monstieElementIconMap: Record<MonstieElement, string> = {
    [MonstieElement.NON]: 'https://static.wikia.nocookie.net/monsterhunter/images/1/1d/MHST2-Element_Neutral_Icon.svg',
    [MonstieElement.FIRE]: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a7/Status_Effect-Fireblight_MH4_Icon.png',
    [MonstieElement.WATER]: 'https://static.wikia.nocookie.net/monsterhunter/images/1/16/Status_Effect-Waterblight_MH4_Icon.png/',
    [MonstieElement.THUNDER]: 'https://static.wikia.nocookie.net/monsterhunter/images/a/ac/Status_Effect-Thunderblight_MH4_Icon.png',
    [MonstieElement.ICE]: 'https://static.wikia.nocookie.net/monsterhunter/images/6/6c/Status_Effect-Iceblight_MH4_Icon.png',
    [MonstieElement.DRAGON]: 'https://static.wikia.nocookie.net/monsterhunter/images/a/ae/Status_Effect-Dragonblight_MH4_Icon.png'
  };

  monstieAilmentIconMap: Record<MonstieAilment, string> = {
    [MonstieAilment.POISON]: 'https://static.wikia.nocookie.net/monsterhunter/images/3/32/StatusEffect05.png',
    [MonstieAilment.BURN]: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a7/Status_Effect-Fireblight_MH4_Icon.png',
    [MonstieAilment.PARALYSIS]: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7d/StatusEffect29.png',
    [MonstieAilment.SLEEP]: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0b/StatusEffect01.png',
    [MonstieAilment.BOMB]: 'https://static.wikia.nocookie.net/monsterhunter/images/4/4d/Status_Effect-Blastblight_MH4_Icon.png',
    [MonstieAilment.BLEED]: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d6/Status_Effect-Bleeding_Custom_Icon.png',
    [MonstieAilment.BLIND]: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7a/Status_Effect-Dark_MHFGG_Icon.png'
  };

  monstieStrengthIconMap: Record<MonstieStrength, string> = {
    [MonstieStrength.INEFFECTIVE]: '/assets/Ineffective.png',
    [MonstieStrength.VERY_INEFFECTIVE]: '/assets/VeryIneffective.png',
    [MonstieStrength.NEUTRAL]: '/assets/Neutral.png',
    [MonstieStrength.EFFECTIVE]: '/assets/Effective.png',
    [MonstieStrength.VERY_EFFECTIVE]: '/assets/VeryEffective.png'
  };

  ngOnInit(): void {
    const save1Stories2: string[] = [
      'Aptonoth',
      'Velocidrome',
      'Kulu-Ya-Ku',
      'Yian Kut-Ku',
      'Bulldrome',
      'Pukei-Pukei',
      'Apceros',
      'Great Jaggi',
      'Royal Ludroth',
      'Arzuros',
      'Qurupeco',
      'Blue Yian Kut-Ku',
      'Paolumu'
    ];
    const save2Stories2: string[] = ['Velocidrome', 'Kulu-Ya-Ku', 'Yian Kut-Ku', 'Bulldrome', 'Pukei-Pukei'];

    const save1Stories3: Partial<Record<Stories3MonstieName, MonstieStatus>> = {
      [Stories3MonstieName.RATHA]: MonstieStatus.OWNED,
      [Stories3MonstieName.TOBI_KADACHI]: MonstieStatus.OWNED,
      [Stories3MonstieName.YIAN_KUT_KU]: MonstieStatus.OWNED,
      [Stories3MonstieName.PAOLUMU]: MonstieStatus.OWNED,
      [Stories3MonstieName.VELOCIDROME]: MonstieStatus.SEEN,
      [Stories3MonstieName.GYPCEROS]: MonstieStatus.SEEN,
      [Stories3MonstieName.NERSCYLLA]: MonstieStatus.OWNED,
      [Stories3MonstieName.ROYAL_LUDROTH]: MonstieStatus.OWNED,
      [Stories3MonstieName.BLUE_YIAN_KUT_KU]: MonstieStatus.OWNED,
      [Stories3MonstieName.GREEN_PLESIOTH]: MonstieStatus.OWNED,
      [Stories3MonstieName.PURPLE_GYPCEROS]: MonstieStatus.SEEN,
      [Stories3MonstieName.CHATACABRA]: MonstieStatus.SEEN
    };

    this.monsties = this.monstieService
      .getStories3Monsties(save1Stories3)
      .sort((a, b) => (a.name > b.name ? -1 : 1))
      .sort((a, b) => (a.genus > b.genus ? -1 : 1));

    // TODO: Add header bar, clicking on it swaps between games
    // TODO: Or have the header show the information for the hover/sticky target
    // TODO: Move all this init into stuff that can be called there
    // TODO: Allow save editing, so need a way of adding monsties without spoilers, and saving/editing that in session storage, save data in the code would be default
    // TODO: Add toggles in the header to show/hide owned, unowned, or all monsties
    // TODO: Add element display for MHS3, probably by refactoring the type section to be a vertical stack
    // TODO: Replace static background color with border color, make duller when unowned vs owned, probably static for unknown when those are shown
    // col-xs-12 col-sm-6 col-md-2 col-lg-1"
  }

  setHover(monstie: Monstie): void {
    this.currentHover = monstie.genus;
  }

  removeHover(monstie: Monstie): void {
    this.currentHover = null;
  }

  setStickyMonstie(monstie: Monstie): void {
    this.stickyMonstie = monstie;
  }

  clearSticky(): void {
    this.stickyMonstie = null;
  }

  getMonstieBorderStyle(genus: MonstieGenus): any {
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

  canDisplay(monstie: Monstie): boolean {
    if (monstie.genus === MonstieGenus.NON_CAPTURABLE) {
      return true;
    } else {
      if (this.hideUnowned) {
        return monstie.status === MonstieStatus.OWNED || monstie.status === MonstieStatus.SEEN;
      } else {
        return true; //monstie.status !== MonstieStatus.UNKNOWN;
      }
    }
    return false;
  }
}
