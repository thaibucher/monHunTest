import { MonstieType, MonstieGenus, Monstie, MonstieElement } from './monstie.model';

export enum Stories2MonstieNames {
  APTONOTH = 'Aptonoth',
  VELOCIDROME = 'Velocidrome',
  KULU_YA_KU = 'Kulu-Ya-Ku',
  YIAN_KUT_KU = 'Yian Kut-Ku',
  BULLDROME = 'Bulldrome',
  PUKEI_PUKEI = 'Pukei-Pukei',
  APCEROS = 'Apceros',
  GREAT_JAGGI = 'Great Jaggi',
  ROYAL_LUDROTH = 'Royal Ludroth',
  ARZUROS = 'Arzuros',
  QURUPECO = 'Qurupeco',
  BLUE_YIAN_KUT_KU = 'Blue Yian Kut-Ku',
  PAOLUMU = 'Paolumu',
  YIAN_GARUGA = 'Yian Garuga',
  GREAT_BAGGI = 'Great Baggi',
  GYPCEROS = 'Gypceros',
  IODROME = 'Iodrome',
  GENDROME = 'Gendrome',
  PURPLE_GYPCEROS = 'Purple Gypceros',
  CRIMSON_QURUPECO = 'Crimson Qurupeco',
  PALAMUTE_NORMAL = 'Palamute Normal',
  PALAMUTE_FIRE = 'Palamute Fire',
  PALAMUTE_WATER = 'Palamute Water',
  PALAMUTE_THUNDER = 'Palamute Thunder',
  PALAMUTE_ICE = 'Palamute Ice',
  PALAMUTE_DRAGON = 'Palamute Dragon',
  TIGREX = 'Tigrex',
  MONOBLOS = 'Monoblos',
  BASARIOS = 'Basarios',
  NARGACUGA = 'Nargacuga',
  RATHIAN = 'Rathian',
  POPO = 'Popo',
  CONGALALA = 'Congalala',
  KECHA_WACHA = 'Kecha Wacha',
  ZAMTRIOS = 'Zamtrios',
  NERSCYLLA = 'Nerscylla',
  BARROTH = 'Barroth',
  TOBI_KADACHI = 'Tobi-Kadachi',
  KHEZU = 'Khezu',
  RED_KHEZU = 'Red Khezu',
  LAGOMBI = 'Lagombi',
  JADE_BARROTH = 'Jade Barroth',
  ANJANATH = 'Anjanath',
  GAMMOTH = 'Gammoth',
  ZINOGRE = 'Zinogre',
  BARIOTH = 'Barioth',
  LEGIANA = 'Legiana',
  CEPHADROME = 'Cephadrome',
  ASH_KECHA_WACHA = 'Ash Kecha Wacha',
  GREEN_NARGACUGA = 'Green Nargacuga',
  DIABLOS = 'Diablos',
  BLACK_DIABLOS = 'Black Diablos',
  WHITE_MONOBLOS = 'White Monoblos',
  MIZUTSUNE = 'Mizutsune',
  LAGIACRUS = 'Lagiacrus',
  URAGAAN = 'Uragaan',
  BRUTE_TIGREX = 'Brute Tigrex',
  PURPLE_LUDROTH = 'Purple Ludroth',
  RUBY_BASARIOS = 'Ruby Basarios',
  GRAVIOS = 'Gravios',
  SHROUDED_NERSCYLLA = 'Shrouded Nerscylla',
  EMERALD_CONGALALA = 'Emerald Congalala',
  BLACK_GRAVIOS = 'Black Gravios',
  IVORY_LAGIACRUS = 'Ivory Lagiacrus',
  BRACHYDIOS = 'Brachydios',
  NERGIGANTE = 'Nergigante',
  ASTALOS = 'Astalos',
  GLAVENUS = 'Glavenus',
  BAZELGEUSE = 'Bazelgeuse',
  SAND_BARIOTH = 'Sand Barioth',
  DEVILJHO = 'Deviljho',
  STYGIAN_ZINOGRE = 'Stygian Zinogre',
  SEREGIOS = 'Seregios',
  RATHALOS = 'Rathalos',
  AZURE_RATHALOS = 'Azure Rathalos',
  PINK_RATHIAN = 'Pink Rathian',
  FULGUR_ANJANATH = 'Fulgur Anjanath',
  SILVERWIND_NARGACUGA = 'Silverwind Nargacuga',
  THUNDERLORD_ZINOGRE = 'Thunderlord Zinogre',
  BLOODBATH_DIABLOS = 'Bloodbath Diablos',
  GRIMCLAW_TIGREX = 'Grimclaw Tigrex',
  DREADQUEEN_RATHIAN = 'Dreadqueen Rathian',
  KIRIN = 'Kirin',
  TEOSTRA = 'Teostra',
  RAJANG = 'Rajang',
  KUSHALA_DAORA = 'Kushala Daora',
  VELKHANA = 'Velkhana',
  RAZEWING_RATHA = 'Razewing Ratha'
}

export const stories2Monsties: Monstie[] = [
  {
    name: Stories2MonstieNames.APTONOTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/25/MHST2-Aptonoth_Egg.svg',
    type: MonstieType.POWER,
    genus: MonstieGenus.HERBIVORE,
    star: 1,
    number: 1,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.VELOCIDROME,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/48/MHST2-Velocidrome_Egg.svg',
    type: MonstieType.SPEED,
    genus: MonstieGenus.BIRD_WYVERN,
    skills: ['Jump', 'Search'],
    star: 1,
    number: 5,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.KULU_YA_KU,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e7/MHST2-Kulu-Ya-Ku_Egg.svg',
    type: MonstieType.TECH,
    genus: MonstieGenus.BIRD_WYVERN,
    star: 2,
    number: 6,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.YIAN_KUT_KU,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a0/MHST2-Yian_Kut-Ku_Egg.svg',
    type: MonstieType.TECH,
    genus: MonstieGenus.BIRD_WYVERN,
    number: 9,

    star: 2,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.BULLDROME,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ed/MHST2-Bulldrome_Egg.svg',
    type: MonstieType.POWER,
    genus: MonstieGenus.FANGED_BEAST,
    number: 11,

    star: 2,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.PUKEI_PUKEI,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a4/MHST2-Pukei-Pukei_Egg.svg',
    type: MonstieType.TECH,
    genus: MonstieGenus.BIRD_WYVERN,

    number: 12,
    star: 2,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.APCEROS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/fb/MHST2-Apceros_Egg.svg',
    type: MonstieType.POWER,
    genus: MonstieGenus.HERBIVORE,
    number: 13,

    star: 1,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.GREAT_JAGGI,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/67/MHST2-Great_Jaggi_Egg.svg',
    type: MonstieType.TECH,
    genus: MonstieGenus.BIRD_WYVERN,
    number: 18,

    star: 2,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.ROYAL_LUDROTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/01/MHST2-Royal_Ludroth_Egg.svg',
    type: MonstieType.POWER,
    genus: MonstieGenus.LEVIATHAN,
    number: 20,

    star: 2,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.ARZUROS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7d/MHST2-Arzuros_Egg.svg',
    type: MonstieType.POWER,
    genus: MonstieGenus.FANGED_BEAST,
    number: 22,

    star: 2,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.QURUPECO,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/c4/MHST2-Qurupeco_Egg.svg',
    type: MonstieType.TECH,
    genus: MonstieGenus.BIRD_WYVERN,
    number: 23,

    star: 2,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.BLUE_YIAN_KUT_KU,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e4/MHST2-Blue_Yian_Kut-Ku_Egg.svg',
    type: MonstieType.TECH,
    genus: MonstieGenus.BIRD_WYVERN,
    number: 24,

    star: 3,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.PAOLUMU,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e9/MHST2-Paolumu_Egg.svg',
    type: MonstieType.TECH,
    genus: MonstieGenus.FLYING_WYVERN,
    number: 27,

    star: 3,
        elements: [MonstieElement.NON]
  },

  {
    name: Stories2MonstieNames.YIAN_GARUGA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d5/MHST2-Yian_Garuga_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BIRD_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.GREAT_BAGGI,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/ff/MHST2-Great_Baggi_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BIRD_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.GYPCEROS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0a/MHST2-Gypceros_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BIRD_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.IODROME,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/31/MHST2-Iodrome_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BIRD_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.GENDROME,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/b7/MHST2-Gendrome_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BIRD_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.PURPLE_GYPCEROS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ef/MHST2-Purple_Gypceros_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BIRD_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.CRIMSON_QURUPECO,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/1/19/MHST2-Crimson_Qurupeco_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BIRD_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.PALAMUTE_NORMAL,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/1/1a/MHST2-Palamute_Normal_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_BEAST,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.PALAMUTE_FIRE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/73/MHST2-Palamute_Fire_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_BEAST,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.PALAMUTE_WATER,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/81/MHST2-Palamute_Water_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_BEAST,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.PALAMUTE_THUNDER,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a2/MHST2-Palamute_Thunder_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_BEAST,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.PALAMUTE_ICE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/46/MHST2-Palamute_Ice_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_BEAST,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.PALAMUTE_DRAGON,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/f2/MHST2-Palamute_Dragon_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_BEAST,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.TIGREX,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e0/MHST2-Tigrex_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.MONOBLOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/53/MHST2-Monoblos_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },

  {
    name: Stories2MonstieNames.BASARIOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/5e/MHST2-Basarios_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.NARGACUGA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/86/MHST2-Nargacuga_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.RATHIAN,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/2e/MHST2-Rathian_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.POPO,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/1/1a/MHST2-Popo_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.HERBIVORE,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.CONGALALA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/9d/MHST2-Congalala_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_BEAST,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.KECHA_WACHA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a2/MHST2-Kecha_Wacha_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_BEAST,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.ZAMTRIOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/49/MHST2-Zamtrios_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.AMPHIBIAN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.NERSCYLLA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8b/MHST2-Nerscylla_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.TEMNOCERAN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.BARROTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0c/MHST2-Barroth_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BRUTE_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.TOBI_KADACHI,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/04/MHST2-Tobi-Kadachi_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.KHEZU,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/73/MHST2-Khezu_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.RED_KHEZU,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a3/MHST2-Red_Khezu_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.LAGOMBI,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/6f/MHST2-Lagombi_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_BEAST,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.JADE_BARROTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/50/MHST2-Jade_Barroth_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BRUTE_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.ANJANATH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d2/MHST2-Anjanath_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BRUTE_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.GAMMOTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/41/MHST2-Gammoth_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_BEAST,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.ZINOGRE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/43/MHST2-Zinogre_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.BARIOTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0c/MHST2-Barioth_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.LEGIANA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/62/MHST2-Legiana_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.CEPHADROME,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a7/MHST2-Cephadrome_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.PISCINE_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.ASH_KECHA_WACHA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/98/MHST2-Ash_Kecha_Wacha_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_BEAST,
    elements: [MonstieElement.NON]

    // number: undefined,
    // star: undefined,
  },
  {
    name: Stories2MonstieNames.GREEN_NARGACUGA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/48/MHST2-Green_Nargacuga_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON]

    // number: undefined,
    // star: undefined,
  },
  {
    name: Stories2MonstieNames.DIABLOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/c2/MHST2-Diablos_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON]

    // number: undefined,
    // star: undefined,
  },
  {
    name: Stories2MonstieNames.BLACK_DIABLOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/80/MHST2-Black_Diablos_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON]

    // number: undefined,
    // star: undefined,
  },
  {
    name: Stories2MonstieNames.WHITE_MONOBLOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/03/MHST2-White_Monoblos_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON]

    // number: undefined,
    // star: undefined,
  },
  {
    name: Stories2MonstieNames.MIZUTSUNE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/72/MHST2-Mizutsune_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.LEVIATHAN,
    elements: [MonstieElement.NON]

    // number: undefined,
    // star: undefined,
  },
  {
    name: Stories2MonstieNames.LAGIACRUS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7d/MHST2-Lagiacrus_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.LEVIATHAN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.URAGAAN,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/eb/MHST2-Uragaan_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BRUTE_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.BRUTE_TIGREX,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0f/MHST2-Brute_Tigrex_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.PURPLE_LUDROTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0d/MHST2-Purple_Ludroth_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.LEVIATHAN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.RUBY_BASARIOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/62/MHST2-Ruby_Basarios_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.GRAVIOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/04/MHST2-Gravios_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.SHROUDED_NERSCYLLA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/1/19/MHST2-Shrouded_Nerscylla_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.TEMNOCERAN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.EMERALD_CONGALALA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/89/MHST2-Emerald_Congalala_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_BEAST,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.BLACK_GRAVIOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/f9/MHST2-Black_Gravios_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.IVORY_LAGIACRUS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/fc/MHST2-Ivory_Lagiacrus_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.LEVIATHAN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.BRACHYDIOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/9b/MHST2-Brachydios_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BRUTE_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.NERGIGANTE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ef/MHST2-Nergigante_Egg.svg',
    type: MonstieType.POWER,
    genus: MonstieGenus.UNKNOWN,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.ASTALOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/5d/MHST2-Astalos_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.GLAVENUS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/34/MHST2-Glavenus_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BRUTE_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.BAZELGEUSE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/1/1e/MHST2-Bazelgeuse_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.UNKNOWN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.SAND_BARIOTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/ab/MHST2-Sand_Barioth_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.DEVILJHO,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8a/MHST2-Deviljho_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.UNKNOWN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.STYGIAN_ZINOGRE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d7/MHST2-Stygian_Zinogre_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.SEREGIOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0a/MHST2-Seregios_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.RATHALOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0d/MHST2-Rathalos_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.AZURE_RATHALOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/95/MHST2-Azure_Rathalos_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.PINK_RATHIAN,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/05/MHST2-Pink_Rathian_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.FULGUR_ANJANATH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e6/MHST2-Fulgur_Anjanath_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.BRUTE_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.SILVERWIND_NARGACUGA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/c7/MHST2-Silverwind_Nargacuga_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.THUNDERLORD_ZINOGRE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/28/MHST2-Thunderlord_Zinogre_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FANGED_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.BLOODBATH_DIABLOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/cd/MHST2-Bloodbath_Diablos_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.GRIMCLAW_TIGREX,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8c/MHST2-Grimclaw_Tigrex_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.DREADQUEEN_RATHIAN,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/91/MHST2-Dreadqueen_Rathian_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.KIRIN,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ea/MHST2-Kirin_Egg.svg',
    type: MonstieType.POWER,
    genus: MonstieGenus.UNKNOWN,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.TEOSTRA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/5f/MHST2-Teostra_Egg.svg',
    type: MonstieType.POWER,
    genus: MonstieGenus.UNKNOWN,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.RAJANG,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/90/MHST2-Rajang_Egg.svg',
    type: MonstieType.POWER,
    genus: MonstieGenus.UNKNOWN,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.KUSHALA_DAORA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/2b/MHST2-Kushala_Daora_Egg.svg',
    type: MonstieType.POWER,
    genus: MonstieGenus.UNKNOWN,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.VELKHANA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8b/MHST2-Velkhana_Egg.svg',
    type: MonstieType.POWER,
    genus: MonstieGenus.UNKNOWN,
        elements: [MonstieElement.NON]
  },
  {
    name: Stories2MonstieNames.RAZEWING_RATHA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/3b/MHST2-Razewing_Ratha_Egg.svg',
    type: MonstieType.UNKNOWN,
    genus: MonstieGenus.FLYING_WYVERN,
    // number: undefined,
    // star: undefined,
        elements: [MonstieElement.NON]
  }
];
