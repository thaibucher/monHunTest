import { Component, OnInit } from '@angular/core';
import { Monstie, MonstieElement, MonstieGenus, MonstieType } from 'src/models/monstie.model';

@Component({
  selector: 'app-monstie-table',
  templateUrl: './monstie-table.component.html',
  styleUrls: ['./monstie-table.component.css']
})
export class MonstieTableComponent implements OnInit {
  constructor() {}

  monsties: Monstie[] = [];
  currentHover: MonstieGenus | null = null;
  monstieTypeIconMap = {
    [MonstieType.POWER]: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d3/MHST2-Power_Type.svg',
    [MonstieType.SPEED]: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d9/MHST2-Speed_Type.svg',
    [MonstieType.TECH]: 'https://static.wikia.nocookie.net/monsterhunter/images/5/5b/MHST2-Technical_Type.svg',
    [MonstieType.UNKNOWN]: '/assets/unknownType.png'
  };

  monstieElementIconMap = {
    [MonstieElement.NON]: 'https://static.wikia.nocookie.net/monsterhunter/images/1/1d/MHST2-Element_Neutral_Icon.svg',
    [MonstieElement.FIRE]: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a7/Status_Effect-Fireblight_MH4_Icon.png',
    [MonstieElement.WATER]: 'https://static.wikia.nocookie.net/monsterhunter/images/1/16/Status_Effect-Waterblight_MH4_Icon.png/',
    [MonstieElement.THUNDER]: 'https://static.wikia.nocookie.net/monsterhunter/images/a/ac/Status_Effect-Thunderblight_MH4_Icon.png',
    [MonstieElement.ICE]: 'https://static.wikia.nocookie.net/monsterhunter/images/6/6c/Status_Effect-Iceblight_MH4_Icon.png',
    [MonstieElement.DRAGON]: 'https://static.wikia.nocookie.net/monsterhunter/images/a/ae/Status_Effect-Dragonblight_MH4_Icon.png'
  };

  ngOnInit(): void {
    const save1: string[] = [
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

    const save2: string[] = ['Velocidrome', 'Kulu-Ya-Ku', 'Yian Kut-Ku', 'Bulldrome', 'Pukei-Pukei'];
    this.monsties = this.initMonstiesStories3(save2)
      .sort((a, b) => (a.name > b.name ? -1 : 1))
      .sort((a, b) => (a.genus > b.genus ? -1 : 1));

    // TODO: Add header bar, clicking on it swaps between games
    // TODO: Move all this init into stuff that can be called there
    // TODO: Set up stuff so saves are marked based on which game
    // TODO: Make sure icons and resources all also swapped, though egg resources are built into monsties so that's fine
  }

  setHover(genus: MonstieGenus): void {
    this.currentHover = genus;
  }

  removeHover(genus: MonstieGenus): void {
    this.currentHover = null;
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

  private initMonstiesStories2(selectedSave: string[]): Monstie[] {
    return [
      {
        name: 'Aptonoth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/25/MHST2-Aptonoth_Egg.svg',
        type: MonstieType.POWER,
        genus: MonstieGenus.HERBIVORE,
        star: 1,
        number: 1,
        owned: selectedSave.includes('Aptonoth')
      },
      {
        name: 'Velocidrome',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/48/MHST2-Velocidrome_Egg.svg',
        type: MonstieType.SPEED,
        genus: MonstieGenus.BIRD_WYVERN,
        skills: ['Jump', 'Search'],
        star: 1,
        number: 5,
        owned: selectedSave.includes('Velocidrome')
      },
      {
        name: 'Kulu-Ya-Ku',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e7/MHST2-Kulu-Ya-Ku_Egg.svg',
        type: MonstieType.TECH,
        genus: MonstieGenus.BIRD_WYVERN,
        star: 2,
        number: 6,
        owned: selectedSave.includes('Kulu-Ya-Ku')
      },
      {
        name: 'Yian Kut-Ku',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a0/MHST2-Yian_Kut-Ku_Egg.svg',
        type: MonstieType.TECH,
        genus: MonstieGenus.BIRD_WYVERN,
        number: 9,
        owned: selectedSave.includes('Yian Kut-Ku'),
        star: 2
      },
      {
        name: 'Bulldrome',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ed/MHST2-Bulldrome_Egg.svg',
        type: MonstieType.POWER,
        genus: MonstieGenus.FANGED_BEAST,
        number: 11,
        owned: selectedSave.includes('Bulldrome'),
        star: 2
      },
      {
        name: 'Pukei-Pukei',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a4/MHST2-Pukei-Pukei_Egg.svg',
        type: MonstieType.TECH,
        genus: MonstieGenus.BIRD_WYVERN,
        owned: selectedSave.includes('Pukei-Pukei'),
        number: 12,
        star: 2
      },
      {
        name: 'Apceros',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/fb/MHST2-Apceros_Egg.svg',
        type: MonstieType.POWER,
        genus: MonstieGenus.HERBIVORE,
        number: 13,
        owned: selectedSave.includes('Apceros'),
        star: 1
      },
      {
        name: 'Great Jaggi',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/67/MHST2-Great_Jaggi_Egg.svg',
        type: MonstieType.TECH,
        genus: MonstieGenus.BIRD_WYVERN,
        number: 18,
        owned: selectedSave.includes('Great Jaggi'),
        star: 2
      },
      {
        name: 'Royal Ludroth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/01/MHST2-Royal_Ludroth_Egg.svg',
        type: MonstieType.POWER,
        genus: MonstieGenus.LEVIATHAN,
        number: 20,
        owned: selectedSave.includes('Royal Ludroth'),
        star: 2
      },
      {
        name: 'Arzuros',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7d/MHST2-Arzuros_Egg.svg',
        type: MonstieType.POWER,
        genus: MonstieGenus.FANGED_BEAST,
        number: 22,
        owned: selectedSave.includes('Arzuros'),
        star: 2
      },
      {
        name: 'Qurupeco',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/c4/MHST2-Qurupeco_Egg.svg',
        type: MonstieType.TECH,
        genus: MonstieGenus.BIRD_WYVERN,
        number: 23,
        owned: selectedSave.includes('Qurupeco'),
        star: 2
      },
      {
        name: 'Blue Yian Kut-Ku',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e4/MHST2-Blue_Yian_Kut-Ku_Egg.svg',
        type: MonstieType.TECH,
        genus: MonstieGenus.BIRD_WYVERN,
        number: 24,
        owned: selectedSave.includes('Blue Yian Kut-Ku'),
        star: 3
      },
      {
        name: 'Paolumu',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e9/MHST2-Paolumu_Egg.svg',
        type: MonstieType.TECH,
        genus: MonstieGenus.FLYING_WYVERN,
        number: 27,
        owned: selectedSave.includes('Paolumu'),
        star: 3
      },

      {
        name: 'Yian Garuga',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d5/MHST2-Yian_Garuga_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BIRD_WYVERN,
        owned: selectedSave.includes('Yian Garuga')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Great Baggi',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/ff/MHST2-Great_Baggi_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BIRD_WYVERN,
        owned: selectedSave.includes('Great Baggi')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Gypceros',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0a/MHST2-Gypceros_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BIRD_WYVERN,
        owned: selectedSave.includes('Gypceros')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Iodrome',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/31/MHST2-Iodrome_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BIRD_WYVERN,
        owned: selectedSave.includes('Iodrome')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Gendrome',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/b7/MHST2-Gendrome_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BIRD_WYVERN,
        owned: selectedSave.includes('Gendrome')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Purple Gypceros',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ef/MHST2-Purple_Gypceros_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BIRD_WYVERN,
        owned: selectedSave.includes('Purple Gypceros')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Crimson Qurupeco',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/1/19/MHST2-Crimson_Qurupeco_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BIRD_WYVERN,
        owned: selectedSave.includes('Crimson Qurupeco')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Palamute Normal',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/1/1a/MHST2-Palamute_Normal_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_BEAST,
        owned: selectedSave.includes('Palamute Normal')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Palamute Fire',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/73/MHST2-Palamute_Fire_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_BEAST,
        owned: selectedSave.includes('Palamute Fire')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Palamute Water',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/81/MHST2-Palamute_Water_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_BEAST,
        owned: selectedSave.includes('Palamute Water')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Palamute Thunder',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a2/MHST2-Palamute_Thunder_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_BEAST,
        owned: selectedSave.includes('Palamute Thunder')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Palamute Ice',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/46/MHST2-Palamute_Ice_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_BEAST,
        owned: selectedSave.includes('Palamute Ice')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Palamute Dragon',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/f2/MHST2-Palamute_Dragon_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_BEAST,
        owned: selectedSave.includes('Palamute Dragon')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Tigrex',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e0/MHST2-Tigrex_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Tigrex')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Monoblos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/53/MHST2-Monoblos_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Monoblos')
        // number: undefined,
        // star: undefined,
      },

      {
        name: 'Basarios',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/5e/MHST2-Basarios_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Basarios')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Nargacuga',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/86/MHST2-Nargacuga_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Nargacuga')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Rathian',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/2e/MHST2-Rathian_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Rathian')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Popo',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/1/1a/MHST2-Popo_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.HERBIVORE,
        owned: selectedSave.includes('Popo')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Congalala',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/9d/MHST2-Congalala_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_BEAST,
        owned: selectedSave.includes('Congalala')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Kecha Wacha',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a2/MHST2-Kecha_Wacha_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_BEAST,
        owned: selectedSave.includes('Kecha Wacha')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Zamtrios',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/49/MHST2-Zamtrios_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.AMPHIBIAN,
        owned: selectedSave.includes('Zamtrios')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Nerscylla',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8b/MHST2-Nerscylla_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.TEMNOCERAN,
        owned: selectedSave.includes('Nerscylla')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Barroth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0c/MHST2-Barroth_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BRUTE_WYVERN,
        owned: selectedSave.includes('Barroth')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Tobi-Kadachi',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/04/MHST2-Tobi-Kadachi_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_WYVERN,
        owned: selectedSave.includes('Tobi-Kadachi')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Khezu',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/73/MHST2-Khezu_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Khezu')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Red Khezu',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a3/MHST2-Red_Khezu_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Red Khezu')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Lagombi',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/6f/MHST2-Lagombi_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_BEAST,
        owned: selectedSave.includes('Lagombi')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Jade Barroth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/50/MHST2-Jade_Barroth_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BRUTE_WYVERN,
        owned: selectedSave.includes('Jade Barroth')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Anjanath',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d2/MHST2-Anjanath_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BRUTE_WYVERN,
        owned: selectedSave.includes('Anjanath')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Gammoth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/41/MHST2-Gammoth_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_BEAST,
        owned: selectedSave.includes('Gammoth')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Zinogre',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/43/MHST2-Zinogre_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_WYVERN,
        owned: selectedSave.includes('Zinogre')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Barioth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0c/MHST2-Barioth_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Barioth')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Legiana',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/62/MHST2-Legiana_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Legiana')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Cephadrome',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a7/MHST2-Cephadrome_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.PISCINE_WYVERN,
        owned: selectedSave.includes('Cephadrome')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Ash Kecha Wacha',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/98/MHST2-Ash_Kecha_Wacha_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_BEAST,
        owned: selectedSave.includes('Ash Kecha Wacha')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Green Nargacuga',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/48/MHST2-Green_Nargacuga_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Green Nargacuga')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Diablos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/c2/MHST2-Diablos_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Diablos')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Black Diablos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/80/MHST2-Black_Diablos_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Black Diablos')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'White Monoblos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/03/MHST2-White_Monoblos_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('White Monoblos')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Mizutsune',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/72/MHST2-Mizutsune_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.LEVIATHAN,
        owned: selectedSave.includes('Mizutsune')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Lagiacrus',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7d/MHST2-Lagiacrus_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.LEVIATHAN,
        owned: selectedSave.includes('Lagiacrus')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Uragaan',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/eb/MHST2-Uragaan_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BRUTE_WYVERN,
        owned: selectedSave.includes('Uragaan')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Brute Tigrex',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0f/MHST2-Brute_Tigrex_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Brute Tigrex')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Purple Ludroth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0d/MHST2-Purple_Ludroth_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.LEVIATHAN,
        owned: selectedSave.includes('Purple Ludroth')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Ruby Basarios',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/62/MHST2-Ruby_Basarios_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Ruby Basarios')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Gravios',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/04/MHST2-Gravios_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Gravios')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Shrouded Nerscylla',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/1/19/MHST2-Shrouded_Nerscylla_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.TEMNOCERAN,
        owned: selectedSave.includes('Shrouded Nerscylla')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Emerald Congalala',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/89/MHST2-Emerald_Congalala_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_BEAST,
        owned: selectedSave.includes('Emerald Congalala')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Black Gravios',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/f9/MHST2-Black_Gravios_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Black Gravios')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Ivory Lagiacrus',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/fc/MHST2-Ivory_Lagiacrus_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.LEVIATHAN,
        owned: selectedSave.includes('Ivory Lagiacrus')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Brachydios',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/9b/MHST2-Brachydios_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BRUTE_WYVERN,
        owned: selectedSave.includes('Brachydios')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Nergigante',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ef/MHST2-Nergigante_Egg.svg',
        type: MonstieType.POWER,
        genus: MonstieGenus.UNKNOWN
      },
      {
        name: 'Astalos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/5d/MHST2-Astalos_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Astalos')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Glavenus',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/34/MHST2-Glavenus_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BRUTE_WYVERN,
        owned: selectedSave.includes('Glavenus')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Bazelgeuse',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/1/1e/MHST2-Bazelgeuse_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.UNKNOWN,
        owned: selectedSave.includes('Bazelgeuse')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Sand Barioth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/ab/MHST2-Sand_Barioth_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Sand Barioth')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Deviljho',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8a/MHST2-Deviljho_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.UNKNOWN,
        owned: selectedSave.includes('Deviljho')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Stygian Zinogre',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d7/MHST2-Stygian_Zinogre_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_WYVERN,
        owned: selectedSave.includes('Stygian Zinogre')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Seregios',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0a/MHST2-Seregios_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Seregios')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Rathalos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0d/MHST2-Rathalos_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Rathalos')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Azure Rathalos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/95/MHST2-Azure_Rathalos_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Azure Rathalos')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Pink Rathian',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/05/MHST2-Pink_Rathian_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Pink Rathian')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Fulgur Anjanath',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e6/MHST2-Fulgur_Anjanath_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.BRUTE_WYVERN,
        owned: selectedSave.includes('Fulgur Anjanath')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Silverwind Nargacuga',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/c7/MHST2-Silverwind_Nargacuga_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Silverwind Nargacuga')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Thunderlord Zinogre',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/28/MHST2-Thunderlord_Zinogre_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FANGED_WYVERN,
        owned: selectedSave.includes('Thunderlord Zinogre')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Bloodbath Diablos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/cd/MHST2-Bloodbath_Diablos_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Bloodbath Diablos')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Grimclaw Tigrex',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8c/MHST2-Grimclaw_Tigrex_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Grimclaw Tigrex')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Dreadqueen Rathian',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/91/MHST2-Dreadqueen_Rathian_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Dreadqueen Rathian')
        // number: undefined,
        // star: undefined,
      },
      {
        name: 'Kirin',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ea/MHST2-Kirin_Egg.svg',
        type: MonstieType.POWER,
        genus: MonstieGenus.UNKNOWN
      },
      {
        name: 'Teostra',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/5f/MHST2-Teostra_Egg.svg',
        type: MonstieType.POWER,
        genus: MonstieGenus.UNKNOWN
      },
      {
        name: 'Rajang',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/90/MHST2-Rajang_Egg.svg',
        type: MonstieType.POWER,
        genus: MonstieGenus.UNKNOWN
      },
      {
        name: 'Kushala Daora',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/2b/MHST2-Kushala_Daora_Egg.svg',
        type: MonstieType.POWER,
        genus: MonstieGenus.UNKNOWN
      },
      {
        name: 'Velkhana',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8b/MHST2-Velkhana_Egg.svg',
        type: MonstieType.POWER,
        genus: MonstieGenus.UNKNOWN
      },
      {
        name: 'Razewing Ratha',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/3b/MHST2-Razewing_Ratha_Egg.svg',
        type: MonstieType.UNKNOWN,
        genus: MonstieGenus.FLYING_WYVERN,
        owned: selectedSave.includes('Razewing Ratha')
        // number: undefined,
        // star: undefined,
      }
    ];
  }

  private initMonstiesStories3(selectedSave: string[]): Monstie[] {
    return [
      {
        name: 'Velocidrome',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/ab/MHST3-Velocidrome_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.BIRD_WYVERN,
        elements: [MonstieElement.NON],
        star: 1,
        location: 'Sunpetal Plains',
        owned: selectedSave.includes('Velocidrome'),
        number: 1
      },
      {
        name: 'Great Izuchi',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/24/MHST3-Great_Izuchi_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.BIRD_WYVERN,
        elements: [MonstieElement.NON],
        star: 1,
        location: 'Howlinyowl Forest, Blessing Hill',
        owned: selectedSave.includes('Great Izuchi')
      },
      {
        name: 'Kulu-Ya-Ku',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/b1/MHST3-Kulu-Ya-Ku_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.BIRD_WYVERN,
        elements: [MonstieElement.NON],
        star: 2,
        location: "Colossal Dragon's Remains",
        owned: selectedSave.includes('Kulu-Ya-Ku')
      },
      {
        name: 'Yian Kut-Ku',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/97/MHST3-Yian_Kut-Ku_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.BIRD_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 2,
        location: 'Sunpetal Plains, Mirror Lake',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Yian Kut-Ku')
      },
      {
        name: 'Blue Yian Kut-Ku',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8e/MHST3-Blue_Yian_Kut-Ku_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.BIRD_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 3,
        location: 'Broadleaf Basin, Blightstone Woods',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Blue Yian Kut-Ku')
      },
      {
        name: 'Gypceros',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/bc/MHST3-Gypceros_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.BIRD_WYVERN,
        elements: [MonstieElement.NON],
        star: 2,
        location: 'Sunpetal Plains, Blightstone Woods',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Gypceros')
      },
      {
        name: 'Purple Gypceros',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/9d/MHST3-Purple_Gypceros_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.BIRD_WYVERN,
        elements: [MonstieElement.NON],
        star: 3,
        location: 'Broadleaf Basin',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Purple Gypceros')
      },
      {
        name: 'Aknosom',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/25/MHST3-Aknosom_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.BIRD_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 3,
        location: 'Mt. Canalta, Howlinyowl Forest',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Aknosom')
      },
      {
        name: 'Pukei-Pukei',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/65/MHST3-Pukei-Pukei_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.BIRD_WYVERN,
        elements: [MonstieElement.NON],
        star: 3,
        location: 'Cataracts, Howlinyowl Forest',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Pukei-Pukei')
      },
      {
        name: 'Yian Garuga',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a1/MHST3-Yian_Garuga_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.BIRD_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 4,
        location: 'Mt. Canalta, Howlinyowl Forest',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Yian Garuga')
      },
      {
        name: 'Deadeye Yian Garuga',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/f2/MHST3-Deadeye_Yian_Garuga_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.BIRD_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 7,
        location: 'Mutation',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Deadeye Yian Garuga')
      },
      {
        name: 'Arzuros',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/b2/MHST3-Arzuros_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FANGED_BEAST,
        elements: [MonstieElement.NON],
        star: 2,
        location: 'Cataracts, Blessing Hill',
        owned: selectedSave.includes('Arzuros')
      },
      {
        name: 'Bishaten',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7e/MHST3-Bishaten_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.FANGED_BEAST,
        elements: [MonstieElement.NON],
        star: 3,
        location: 'Howlinyowl Forest, Blessing Hill',
        skills: ['Fly', 'Wall Climb'],
        owned: selectedSave.includes('Bishaten')
      },
      {
        name: 'Blood Orange Bishaten',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/cb/MHST3-Blood_Orange_Bishaten_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FANGED_BEAST,
        elements: [MonstieElement.FIRE],
        star: 4,
        location: 'Bountiful Dunes',
        skills: ['Fly', 'Wall Climb'],
        owned: selectedSave.includes('Blood Orange Bishaten')
      },
      {
        name: 'Blangonga',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/22/MHST3-Blangonga_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FANGED_BEAST,
        elements: [MonstieElement.ICE],
        star: 3,
        location: 'Glacial Caps',
        skills: ['Wall Climb', 'Breath'],
        owned: selectedSave.includes('Blangonga')
      },
      {
        name: 'Garangolm',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/9e/MHST3-Garangolm_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FANGED_BEAST,
        elements: [MonstieElement.NON],
        star: 4,
        location: "Mt. Canalta, Colossal Dragon's Remains",
        skills: ['Wall Climb'],
        owned: selectedSave.includes('Garangolm')
      },
      {
        name: 'Ajarakan',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e8/MHST3-Ajarakan_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.FANGED_BEAST,
        elements: [MonstieElement.FIRE],
        star: 5,
        location: 'Bountiful Dunes',
        skills: ['Wall Climb'],
        owned: selectedSave.includes('Ajarakan')
      },
      {
        name: 'Goss Harag',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a0/MHST3-Goss_Harag_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FANGED_BEAST,
        elements: [MonstieElement.ICE],
        star: 5,
        location: 'Old Capital Road',
        skills: ['Breath'],
        owned: selectedSave.includes('Goss Harag')
      },
      {
        name: 'Canyne',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/ae/MHST3-Canyne_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FANGED_BEAST,
        elements: [MonstieElement.NON],
        star: 5,
        location: 'Blessing Hill',
        skills: ['Wall Climb', 'Ground Dive'],
        owned: selectedSave.includes('Canyne')
      },
      {
        name: 'Chatacabra',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a8/MHST3-Chatacabra_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.AMPHIBIAN,
        elements: [MonstieElement.NON],
        star: 1,
        location: 'Broadleaf Basin, Blightstone Woods',
        owned: selectedSave.includes('Chatacabra')
      },
      {
        name: 'Tetranadon',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7b/MHST3-Tetranadon_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.AMPHIBIAN,
        elements: [MonstieElement.WATER],
        star: 3,
        location: 'Cataracts, Frozen Grotto',
        skills: ['Breath'],
        owned: selectedSave.includes('Tetranadon')
      },
      {
        name: 'Shogun Ceanataur',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a9/MHST3-Shogun_Ceanataur_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.CARAPACEON,
        elements: [MonstieElement.WATER],
        star: 3,
        location: "Colossal Dragon's Remains",
        skills: ['Breath', 'Ground Dive'],
        owned: selectedSave.includes('Shogun Ceanataur')
      },
      {
        name: 'Nerscylla',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e4/MHST3-Nerscylla_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.TEMNOCERAN,
        elements: [MonstieElement.NON],
        star: 3,
        location: 'Sunpetal Plains, Blightstone Woods',
        skills: ['Wall Climb'],
        owned: selectedSave.includes('Nerscylla')
      },
      {
        name: 'Shrouded Nerscylla',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7c/MHST3-Shrouded_Nerscylla_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.TEMNOCERAN,
        elements: [MonstieElement.NON],
        star: 4,
        location: 'Rococo Rocks',
        skills: ['Wall Climb'],
        owned: selectedSave.includes('Shrouded Nerscylla')
      },
      {
        name: 'Rakna-Kadaki',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a3/MHST3-Rakna-Kadaki_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.TEMNOCERAN,
        elements: [MonstieElement.FIRE],
        star: 5,
        location: "Death's Maw",
        owned: selectedSave.includes('Rakna-Kadaki')
      },
      {
        name: 'Barroth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/44/MHST3-Barroth_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.BRUTE_WYVERN,
        elements: [MonstieElement.NON],
        star: 3,
        location: "Colossal Dragon's Remains",
        skills: ['Ground Dive'],
        owned: selectedSave.includes('Barroth')
      },
      {
        name: 'Jade Barroth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/65/MHST3-Jade_Barroth_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.BRUTE_WYVERN,
        elements: [MonstieElement.ICE],
        star: 4,
        location: 'Old Capital Road',
        skills: ['Ground Dive'],
        owned: selectedSave.includes('Jade Barroth')
      },
      {
        name: 'Anjanath',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/9a/MHST3-Anjanath_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.BRUTE_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 4,
        location: 'Broadleaf Basin',
        skills: ['Breath'],
        owned: selectedSave.includes('Anjanath')
      },
      {
        name: 'Fulgur Anjanath',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/89/MHST3-Fulgur_Anjanath_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.BRUTE_WYVERN,
        elements: [MonstieElement.THUNDER],
        star: 5,
        location: 'Old Capital Road',
        skills: ['Breath'],
        owned: selectedSave.includes('Fulgur Anjanath')
      },
      {
        name: 'Glavenus',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/df/MHST3-Glavenus_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.BRUTE_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 5,
        location: 'Rococo Rocks',
        skills: ['Breath'],
        owned: selectedSave.includes('Glavenus')
      },
      {
        name: 'Hellblade Glavenus',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/5c/MHST3-Hellblade_Glavenus_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.BRUTE_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 7,
        location: 'Mutation',
        skills: ['Breath'],
        owned: selectedSave.includes('Hellblade Glavenus')
      },
      {
        name: 'Brachydios',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/00/MHST3-Brachydios_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.BRUTE_WYVERN,
        elements: [MonstieElement.NON],
        star: 6,
        location: 'Glacial Caps',
        owned: selectedSave.includes('Brachydios')
      },
      {
        name: 'Deviljho',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0f/MHST3-Deviljho_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.BRUTE_WYVERN,
        elements: [MonstieElement.DRAGON],
        star: 7,
        location: 'Sacrosanctum/Lazlion',
        skills: ['Breath'],
        owned: selectedSave.includes('Deviljho')
      },
      {
        name: 'Plesioth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/4a/MHST3-Plesioth_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.PISCINE_WYVERN,
        elements: [MonstieElement.WATER],
        star: 4,
        location: 'Mirror Lake',
        skills: ['Swim', 'Breath'],
        owned: selectedSave.includes('Plesioth')
      },
      {
        name: 'Green Plesioth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/1/11/MHST3-Green_Plesioth_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.PISCINE_WYVERN,
        elements: [MonstieElement.WATER],
        star: 5,
        location: 'Mirror Lake, Bountiful Dunes',
        skills: ['Swim', 'Breath'],
        owned: selectedSave.includes('Green Plesioth')
      },
      {
        name: 'Royal Ludroth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e7/MHST3-Royal_Ludroth_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.LEVIATHAN,
        elements: [MonstieElement.WATER],
        star: 2,
        location: 'Sunpetal Plains, Mirror Lake',
        skills: ['Swim', 'Breath'],
        owned: selectedSave.includes('Royal Ludroth')
      },
      {
        name: 'Purple Ludroth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/b3/MHST3-Purple_Ludroth_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.LEVIATHAN,
        elements: [MonstieElement.WATER],
        star: 3,
        location: 'Cataracts, Blessing Hill',
        skills: ['Swim', 'Breath'],
        owned: selectedSave.includes('Purple Ludroth')
      },
      {
        name: 'Somnacanth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0c/MHST3-Somnacanth_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.LEVIATHAN,
        elements: [MonstieElement.WATER],
        star: 4,
        location: 'Cataracts, Frozen Grotto',
        skills: ['Swim', 'Breath'],
        owned: selectedSave.includes('Somnacanth')
      },
      {
        name: 'Aurora Somnacanth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/c8/MHST3-Aurora_Somnacanth_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.LEVIATHAN,
        elements: [MonstieElement.ICE],
        star: 5,
        location: 'Mt. Canalta, Frozen Grotto',
        skills: ['Swim', 'Breath'],
        owned: selectedSave.includes('Aurora Somnacanth')
      },
      {
        name: 'Lagiacrus',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8e/MHST3-Lagiacrus_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.LEVIATHAN,
        elements: [MonstieElement.THUNDER],
        star: 5,
        location: 'Endangered Den (Mirror Lake)',
        skills: ['Swim', 'Breath'],
        owned: selectedSave.includes('Lagiacrus')
      },
      {
        name: 'Ivory Lagiacrus',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/58/MHST3-Ivory_Lagiacrus_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.LEVIATHAN,
        elements: [MonstieElement.THUNDER],
        star: 6,
        location: 'Mutation',
        skills: ['Swim', 'Breath'],
        owned: selectedSave.includes('Ivory Lagiacrus')
      },
      {
        name: 'Mizutsune',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/01/MHST3-Mizutsune_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.LEVIATHAN,
        elements: [MonstieElement.WATER],
        star: 5,
        location: 'Endangered Den (Frozen Grotto)',
        skills: ['Swim', 'Breath'],
        owned: selectedSave.includes('Mizutsune')
      },
      {
        name: 'Soulseer Mizutsune',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8a/MHST3-Soulseer_Mizutsune_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.LEVIATHAN,
        elements: [MonstieElement.WATER],
        star: 7,
        location: 'Mutation',
        skills: ['Swim', 'Breath'],
        owned: selectedSave.includes('Soulseer Mizutsune')
      },
      {
        name: 'Almudron',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/ba/MHST3-Almudron_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.LEVIATHAN,
        elements: [MonstieElement.WATER],
        star: 5,
        location: "Colossal Dragon's Remains",
        skills: ['Swim', 'Ground Dive'],
        owned: selectedSave.includes('Almudron')
      },
      {
        name: 'Tobi-Kadachi',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/2f/MHST3-Tobi-Kadachi_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FANGED_WYVERN,
        elements: [MonstieElement.THUNDER],
        star: 3,
        location: 'Broadleaf Basin',
        skills: ['Fly', 'Wall Climb'],
        owned: selectedSave.includes('Tobi-Kadachi')
      },
      {
        name: 'Odogaron',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/cb/MHST3-Odogaron_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FANGED_WYVERN,
        elements: [MonstieElement.NON],
        star: 5,
        location: "Death's Maw",
        skills: ['Wall Climb'],
        owned: selectedSave.includes('Odogaron')
      },
      {
        name: 'Ebony Odogaron',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/3f/MHST3-Ebony_Odogaron_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FANGED_WYVERN,
        elements: [MonstieElement.DRAGON],
        star: 6,
        location: 'Sacrosanctum/Lazlion',
        skills: ['Wall Climb'],
        owned: selectedSave.includes('Ebony Odogaron')
      },
      {
        name: 'Zinogre',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/da/MHST3-Zinogre_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FANGED_WYVERN,
        elements: [MonstieElement.THUNDER],
        star: 5,
        location: 'Endangered Den (Rococo Rocks)',
        skills: ['Wall Climb'],
        owned: selectedSave.includes('Zinogre')
      },
      {
        name: 'Stygian Zinogre',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/bc/MHST3-Stygian_Zinogre_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.FANGED_WYVERN,
        elements: [MonstieElement.DRAGON],
        star: 6,
        location: 'Mutation',
        skills: ['Wall Climb'],
        owned: selectedSave.includes('Stygian Zinogre')
      },
      {
        name: 'Thunderlord Zinogre',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/07/MHST3-Thunderlord_Zinogre_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FANGED_WYVERN,
        elements: [MonstieElement.THUNDER],
        star: 7,
        location: 'Mutation',
        skills: ['Wall Climb'],
        owned: selectedSave.includes('Thunderlord Zinogre')
      },
      {
        name: 'Lunagaron',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/f2/MHST3-Lunagaron_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FANGED_WYVERN,
        elements: [MonstieElement.ICE],
        star: 5,
        location: 'Old Capital Road',
        skills: ['Wall Climb', 'Breath'],
        owned: selectedSave.includes('Lunagaron')
      },
      {
        name: 'Magnamalo',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/72/MHST3-Magnamalo_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FANGED_WYVERN,
        elements: [MonstieElement.NON],
        star: 6,
        location: 'Old Capital Road',
        skills: ['Wall Climb'],
        owned: selectedSave.includes('Magnamalo')
      },
      {
        name: 'Paolumu',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/21/MHST3-Paolumu_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.NON],
        star: 3,
        location: 'Blightstone Woods',
        skills: ['Fly'],
        owned: selectedSave.includes('Paolumu')
      },
      {
        name: 'Khezu',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/b4/MHST3-Khezu_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.THUNDER],
        star: 3,
        location: 'Frozen Grotto',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Khezu')
      },
      {
        name: 'Red Khezu',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/60/MHST3-Red_Khezu_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.THUNDER],
        star: 4,
        location: 'Frozen Grotto, Glacial Caps',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Red Khezu')
      },
      {
        name: 'Rathian',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/42/MHST3-Rathian_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 4,
        location: 'Endangered Den (Sunpetal Plains)',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Rathian')
      },
      {
        name: 'Pink Rathian',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/54/MHST3-Pink_Rathian_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 5,
        location: 'Mutation',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Pink Rathian')
      },
      {
        name: 'Dreadqueen Rathian',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d5/MHST3-Dreadqueen_Rathian_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 7,
        location: 'Mutation',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Dreadqueen Rathian')
      },
      {
        name: 'Legiana',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/57/MHST3-Legiana_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.ICE],
        star: 4,
        location: 'Glacial Caps',
        skills: ['Fly'],
        owned: selectedSave.includes('Legiana')
      },
      {
        name: 'Barioth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/80/MHST3-Barioth_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.ICE],
        star: 4,
        location: 'Endangered Den (Glacial Caps)',
        skills: ['Fly', 'Wall Climb', 'Breath'],
        owned: selectedSave.includes('Barioth')
      },
      {
        name: 'Sand Barioth',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/55/MHST3-Sand_Barioth_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.NON],
        star: 5,
        location: 'Mutation',
        skills: ['Fly', 'Wall Climb', 'Breath'],
        owned: selectedSave.includes('Sand Barioth')
      },
      {
        name: 'Nargacuga',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/34/MHST3-Nargacuga_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.NON],
        star: 4,
        location: 'Endangered Den (Blessing Hill)',
        skills: ['Wall Climb', 'Stealth'],
        owned: selectedSave.includes('Nargacuga')
      },
      {
        name: 'Green Nargacuga',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/fe/MHST3-Green_Nargacuga_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.NON],
        star: 5,
        location: 'Mutation',
        skills: ['Wall Climb', 'Stealth'],
        owned: selectedSave.includes('Green Nargacuga')
      },
      {
        name: 'Silverwind Nargacuga',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/ca/MHST3-Silverwind_Nargacuga_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.NON],
        star: 7,
        location: 'Mutation',
        skills: ['Wall Climb', 'Stealth'],
        owned: selectedSave.includes('Silverwind Nargacuga')
      },
      {
        name: 'Astalos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/27/MHST3-Astalos_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.THUNDER],
        star: 5,
        location: 'Endangered Den (Mirror Lake)',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Astalos')
      },
      {
        name: 'Boltreaver Astalos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ed/MHST3-Boltreaver_Astalos_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.THUNDER],
        star: 7,
        location: 'Mutation',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Boltreaver Astalos')
      },
      {
        name: 'Ratha',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/31/MHST3-Ratha_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 5,
        location: 'Always in party',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Ratha')
      },
      {
        name: 'Rathalos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/c4/MHST3-Rathalos_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 5,
        location: 'Sacrosanctum/Lazlion',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Rathalos')
      },
      {
        name: 'Azure Rathalos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a5/MHST3-Azure_Rathalos_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 6,
        location: 'Mutation',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Azure Rathalos')
      },
      {
        name: 'Dreadking Rathalos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/82/MHST3-Dreadking_Rathalos_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 7,
        location: 'Mutation',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Dreadking Rathalos')
      },
      {
        name: 'Tigrex',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/00/MHST3-Tigrex_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.NON],
        star: 5,
        location: "Endangered Den (Colossal Dragon's Remains)",
        skills: ['Wall Climb'],
        owned: selectedSave.includes('Tigrex')
      },
      {
        name: 'Brute Tigrex',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/3c/MHST3-Brute_Tigrex_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.NON],
        star: 6,
        location: 'Mutation',
        skills: ['Wall Climb'],
        owned: selectedSave.includes('Brute Tigrex')
      },
      {
        name: 'Grimclaw Tigrex',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/dd/MHST3-Grimclaw_Tigrex_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.NON],
        star: 7,
        location: 'Mutation',
        skills: ['Wall Climb'],
        owned: selectedSave.includes('Grimclaw Tigrex')
      },
      {
        name: 'Gravios',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/92/MHST3-Gravios_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 5,
        location: 'Rococo Rocks',
        skills: ['Fly', 'Breath', 'Ground Dive'],
        owned: selectedSave.includes('Gravios')
      },
      {
        name: 'Black Gravios',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ed/MHST3-Black_Gravios_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 6,
        location: "Bountiful Dunes, Death's Maw",
        skills: ['Fly', 'Breath', 'Ground Dive'],
        owned: selectedSave.includes('Black Gravios')
      },
      {
        name: 'Diablos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d8/MHST3-Diablos_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.NON],
        star: 5,
        location: 'Rococo Rocks',
        skills: ['Ground Dive'],
        owned: selectedSave.includes('Diablos')
      },
      {
        name: 'Black Diablos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e1/MHST3-Black_Diablos_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.NON],
        star: 6,
        location: "Rococo Rocks, Death's Maw",
        skills: ['Ground Dive'],
        owned: selectedSave.includes('Black Diablos')
      },
      {
        name: 'Bloodbath Diablos',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/b4/MHST3-Bloodbath_Diablos_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.NON],
        star: 7,
        location: 'Mutation',
        skills: ['Ground Dive'],
        owned: selectedSave.includes('Bloodbath Diablos')
      },
      {
        name: 'Seregios',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/63/MHST3-Seregios_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.NON],
        star: 6,
        location: 'Mt. Canalta',
        skills: ['Fly'],
        owned: selectedSave.includes('Seregios')
      },
      {
        name: 'Espinas',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/27/MHST3-Espinas_Icon.png',
        type: MonstieType.POWER,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.FIRE],
        star: 6,
        location: 'Bountiful Dunes',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Espinas')
      },
      {
        name: 'Rey Dau',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/44/MHST3-Rey_Dau_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.THUNDER],
        star: 6,
        location: "Death's Maw",
        skills: ['Fly'],
        owned: selectedSave.includes('Rey Dau')
      },
      {
        name: 'Arkveld',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/fb/MHST3-Arkveld_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.FLYING_WYVERN,
        elements: [MonstieElement.DRAGON],
        star: 6,
        location: 'Sacrosanctum/Lazlion',
        skills: ['Fly'],
        owned: selectedSave.includes('Arkveld')
      },
      {
        name: 'Namielle',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ee/MHST3-Namielle_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.ELDER_DRAGON,
        elements: [MonstieElement.WATER],
        star: 7,
        location: 'Mirror Lake',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Namielle')
      },
      {
        name: 'Velkhana',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e2/MHST3-Velkhana_Icon.png',
        type: MonstieType.TECH,
        genus: MonstieGenus.ELDER_DRAGON,
        elements: [MonstieElement.ICE],
        star: 7,
        location: 'Glacial Caps',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Velkhana')
      },
      {
        name: 'Malzeno',
        eggUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a0/MHST3-Malzeno_Icon.png',
        type: MonstieType.SPEED,
        genus: MonstieGenus.ELDER_DRAGON,
        elements: [MonstieElement.DRAGON],
        star: 7,
        location: 'Sacrosanctum/Lazlion',
        skills: ['Fly', 'Breath'],
        owned: selectedSave.includes('Malzeno')
      }
    ];
  }
}
