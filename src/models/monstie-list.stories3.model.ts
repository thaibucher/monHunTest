import { Monstie, MonstieType, MonstieGenus, MonstieElement, MonstieAilment, MonstieStrength, Stories3Location, MonstieSkill } from './monstie.model';

export enum Stories3MonstieName {
  VELOCIDROME = 'Velocidrome',
  GREAT_IZUCHI = 'Great Izuchi',
  KULU_YA_KU = 'Kulu-Ya-Ku',
  YIAN_KUT_KU = 'Yian Kut-Ku',
  BLUE_YIAN_KUT_KU = 'Blue Yian Kut-Ku',
  GYPCEROS = 'Gypceros',
  PURPLE_GYPCEROS = 'Purple Gypceros',
  AKNOSOM = 'Aknosom',
  PUKEI_PUKEI = 'Pukei-Pukei',
  YIAN_GARUGA = 'Yian Garuga',
  DEADEYE_YIAN_GARUGA = 'Deadeye Yian Garuga',
  ARZUROS = 'Arzuros',
  BISHATEN = 'Bishaten',
  BLOOD_ORANGE_BISHATEN = 'Blood Orange Bishaten',
  BLANGONGA = 'Blangonga',
  GARANGOLM = 'Garangolm',
  AJARAKAN = 'Ajarakan',
  GOSS_HARAG = 'Goss Harag',
  CANYNE = 'Canyne',
  CHATACABRA = 'Chatacabra',
  TETRANADON = 'Tetranadon',
  SHOGUN_CEANATAUR = 'Shogun Ceanataur',
  NERSCYLLA = 'Nerscylla',
  SHROUDED_NERSCYLLA = 'Shrouded Nerscylla',
  RAKNA_KADAKI = 'Rakna-Kadaki',
  BARROTH = 'Barroth',
  JADE_BARROTH = 'Jade Barroth',
  ANJANATH = 'Anjanath',
  FULGUR_ANJANATH = 'Fulgur Anjanath',
  GLAVENUS = 'Glavenus',
  HELLBLADE_GLAVENUS = 'Hellblade Glavenus',
  BRACHYDIOS = 'Brachydios',
  DEVILJHO = 'Deviljho',
  PLESIOTH = 'Plesioth',
  GREEN_PLESIOTH = 'Green Plesioth',
  ROYAL_LUDROTH = 'Royal Ludroth',
  PURPLE_LUDROTH = 'Purple Ludroth',
  SOMNACANTH = 'Somnacanth',
  AURORA_SOMNACANTH = 'Aurora Somnacanth',
  LAGIACRUS = 'Lagiacrus',
  IVORY_LAGIACRUS = 'Ivory Lagiacrus',
  MIZUTSUNE = 'Mizutsune',
  SOULSEER_MIZUTSUNE = 'Soulseer Mizutsune',
  ALMUDRON = 'Almudron',
  TOBI_KADACHI = 'Tobi-Kadachi',
  ODOGARON = 'Odogaron',
  EBONY_ODOGARON = 'Ebony Odogaron',
  ZINOGRE = 'Zinogre',
  STYGIAN_ZINOGRE = 'Stygian Zinogre',
  THUNDERLORD_ZINOGRE = 'Thunderlord Zinogre',
  LUNAGARON = 'Lunagaron',
  MAGNAMALO = 'Magnamalo',
  PAOLUMU = 'Paolumu',
  KHEZU = 'Khezu',
  RED_KHEZU = 'Red Khezu',
  RATHIAN = 'Rathian',
  PINK_RATHIAN = 'Pink Rathian',
  DREADQUEEN_RATHIAN = 'Dreadqueen Rathian',
  LEGIANA = 'Legiana',
  BARIOTH = 'Barioth',
  SAND_BARIOTH = 'Sand Barioth',
  NARGACUGA = 'Nargacuga',
  GREEN_NARGACUGA = 'Green Nargacuga',
  SILVERWIND_NARGACUGA = 'Silverwind Nargacuga',
  ASTALOS = 'Astalos',
  BOLTREAVER_ASTALOS = 'Boltreaver Astalos',
  RATHA = 'Ratha',
  RATHALOS = 'Rathalos',
  AZURE_RATHALOS = 'Azure Rathalos',
  DREADKING_RATHALOS = 'Dreadking Rathalos',
  TIGREX = 'Tigrex',
  BRUTE_TIGREX = 'Brute Tigrex',
  GRIMCLAW_TIGREX = 'Grimclaw Tigrex',
  GRAVIOS = 'Gravios',
  BLACK_GRAVIOS = 'Black Gravios',
  DIABLOS = 'Diablos',
  BLACK_DIABLOS = 'Black Diablos',
  BLOODBATH_DIABLOS = 'Bloodbath Diablos',
  SEREGIOS = 'Seregios',
  ESPINAS = 'Espinas',
  REY_DAU = 'Rey Dau',
  ARKVELD = 'Arkveld',
  NAMIELLE = 'Namielle',
  VELKHANA = 'Velkhana',
  MALZENO = 'Malzeno'
}

export const stories3Monsties: Monstie[] = [
  {
    name: Stories3MonstieName.VELOCIDROME,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/ab/MHST3-Velocidrome_Icon.png',
    type: MonstieType.SPEED,
    enragedType: MonstieType.POWER,
    genus: MonstieGenus.BIRD_WYVERN,
    elements: [MonstieElement.NON],
    star: 1,
    location: [Stories3Location.SUNPETAL_PLAINS, Stories3Location.ASHEN_PASS],
    stats: {
      Health: 3,
      Attack: 6,
      Speed: 9,
      Defense: 3
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.NEUTRAL,
      [MonstieElement.THUNDER]: MonstieStrength.NEUTRAL,
      [MonstieElement.ICE]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.DRAGON]: MonstieStrength.VERY_INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.GREAT_IZUCHI,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/24/MHST3-Great_Izuchi_Icon.png',
    type: MonstieType.SPEED,
    enragedType: MonstieType.POWER,
    genus: MonstieGenus.BIRD_WYVERN,
    elements: [MonstieElement.NON],
    star: 1,
    location: [Stories3Location.HOWLINYOWL_FOREST, Stories3Location.BLESSING_HILL],
    stats: {
      Health: 3,
      Attack: 5,
      Crit: 0,
      Speed: 7,
      Defense: 3,
      StaminaRegen: 0,
      StaminaBase: 0
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.VERY_EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.NEUTRAL,
      [MonstieElement.WATER]: MonstieStrength.EFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.NEUTRAL,
      [MonstieElement.DRAGON]: MonstieStrength.VERY_INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.KULU_YA_KU,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/b1/MHST3-Kulu-Ya-Ku_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.BIRD_WYVERN,
    elements: [MonstieElement.NON],
    star: 2,
    location: "Colossal Dragon's Remains"
  },
  {
    name: Stories3MonstieName.YIAN_KUT_KU,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/97/MHST3-Yian_Kut-Ku_Icon.png',
    type: MonstieType.TECH,
    enragedType: MonstieType.SPEED,
    genus: MonstieGenus.BIRD_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 2,
    location: 'Sunpetal Plains, Mirror Lake',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH],
    stats: {
      Health: 3,
      Attack: 4,
      Speed: 6,
      Defense: 5,
      Crit: 1,
      StaminaBase: 4,
      StaminaRegen: 10
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.INEFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.NEUTRAL,
      [MonstieElement.THUNDER]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.DRAGON]: MonstieStrength.VERY_EFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.BLUE_YIAN_KUT_KU,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8e/MHST3-Blue_Yian_Kut-Ku_Icon.png',
    type: MonstieType.TECH,
    enragedType: MonstieType.SPEED,
    genus: MonstieGenus.BIRD_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 3,
    location: [Stories3Location.BROADLEAF_BASIN, Stories3Location.BLIGHTSTONE_WOODS],
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH],
    stats: {
      Health: 4,
      Attack: 5,
      Speed: 6,
      Defense: 3,
      Crit: 1,
      StaminaBase: 7,
      StaminaRegen: 7
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.NEUTRAL,
      [MonstieElement.DRAGON]: MonstieStrength.VERY_INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.GYPCEROS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/bc/MHST3-Gypceros_Icon.png',
    type: MonstieType.POWER,
    enragedType: MonstieType.TECH,
    genus: MonstieGenus.BIRD_WYVERN,
    elements: [MonstieElement.NON],
    star: 2,
    location: [Stories3Location.SUNPETAL_PLAINS, Stories3Location.BLIGHTSTONE_WOODS],
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH],
    stats: {
      Health: 5,
      Attack: 4,
      Speed: 5,
      Defense: 6,
      Crit: 0,
      StaminaBase: 0,
      StaminaRegen: 0
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.INEFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.DRAGON]: MonstieStrength.NEUTRAL
    }
  },
  {
    name: Stories3MonstieName.PURPLE_GYPCEROS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/9d/MHST3-Purple_Gypceros_Icon.png',
    type: MonstieType.POWER,
    enragedType: MonstieType.TECH,
    genus: MonstieGenus.BIRD_WYVERN,
    elements: [MonstieElement.NON],
    star: 3,
    location: [Stories3Location.BROADLEAF_BASIN],
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH],
    stats: {
      Health: 5,
      Attack: 5,
      Speed: 5,
      Defense: 4,
      Crit: 0,
      StaminaBase: 0,
      StaminaRegen: 0
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.INEFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.DRAGON]: MonstieStrength.NEUTRAL
    }
  },
  {
    name: Stories3MonstieName.AKNOSOM,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/25/MHST3-Aknosom_Icon.png',
    type: MonstieType.TECH,
    enragedType: MonstieType.POWER,
    genus: MonstieGenus.BIRD_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 3,
    location: [Stories3Location.CANALTA, Stories3Location.HOWLINYOWL_FOREST],
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.PUKEI_PUKEI,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/65/MHST3-Pukei-Pukei_Icon.png',
    type: MonstieType.TECH,
    enragedType: MonstieType.SPEED,
    genus: MonstieGenus.BIRD_WYVERN,
    elements: [MonstieElement.NON],
    star: 3,
    location: [Stories3Location.CATARACTS, Stories3Location.HOWLINYOWL_FOREST],
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH],
    stats: {
      Health: 5,
      Attack: 4,
      Crit: 0,
      Speed: 6,
      Defense: 5,
      StaminaRegen: 0,
      StaminaBase: 0
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.NEUTRAL,
      [MonstieElement.WATER]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.DRAGON]: MonstieStrength.INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.YIAN_GARUGA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a1/MHST3-Yian_Garuga_Icon.png',
    type: MonstieType.TECH,
    enragedType: MonstieType.POWER,
    genus: MonstieGenus.BIRD_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 4,
    location: [Stories3Location.CANALTA, Stories3Location.HOWLINYOWL_FOREST],
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH],
    stats: {
      Health: 0,
      Attack: 0,
      Crit: 0,
      Speed: 0,
      Defense: 0,
      StaminaRegen: 0,
      StaminaBase: 0
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.DRAGON]: MonstieStrength.NEUTRAL
    }
  },
  {
    name: Stories3MonstieName.DEADEYE_YIAN_GARUGA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/f2/MHST3-Deadeye_Yian_Garuga_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.BIRD_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 7,
    location: 'Mutation',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.ARZUROS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/b2/MHST3-Arzuros_Icon.png',
    type: MonstieType.POWER,
    enragedType: MonstieType.TECH,
    genus: MonstieGenus.FANGED_BEAST,
    elements: [MonstieElement.NON],
    star: 2,
    location: [Stories3Location.CATARACTS, Stories3Location.BLESSING_HILL],
    stats: {
      Health: 5,
      Attack: 4,
      Crit: 0,
      Speed: 5,
      Defense: 4,
      StaminaRegen: 0,
      StaminaBase: 0
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.NEUTRAL,
      [MonstieElement.ICE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.DRAGON]: MonstieStrength.VERY_INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.BISHATEN,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7e/MHST3-Bishaten_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.FANGED_BEAST,
    elements: [MonstieElement.NON],
    star: 3,
    location: 'Howlinyowl Forest, Blessing Hill',
    skills: [MonstieSkill.FLY, MonstieSkill.WALL_CLIMB]
  },
  {
    name: Stories3MonstieName.BLOOD_ORANGE_BISHATEN,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/cb/MHST3-Blood_Orange_Bishaten_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FANGED_BEAST,
    elements: [MonstieElement.FIRE],
    star: 4,
    location: 'Bountiful Dunes',
    skills: [MonstieSkill.FLY, MonstieSkill.WALL_CLIMB]
  },
  {
    name: Stories3MonstieName.BLANGONGA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/22/MHST3-Blangonga_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FANGED_BEAST,
    elements: [MonstieElement.ICE],
    star: 3,
    location: 'Glacial Caps',
    skills: [MonstieSkill.WALL_CLIMB, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.GARANGOLM,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/9e/MHST3-Garangolm_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FANGED_BEAST,
    elements: [MonstieElement.NON],
    star: 4,
    location: "Mt. Canalta, Colossal Dragon's Remains",
    skills: [MonstieSkill.WALL_CLIMB]
  },
  {
    name: Stories3MonstieName.AJARAKAN,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e8/MHST3-Ajarakan_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.FANGED_BEAST,
    elements: [MonstieElement.FIRE],
    star: 5,
    location: 'Bountiful Dunes',
    skills: [MonstieSkill.WALL_CLIMB]
  },
  {
    name: Stories3MonstieName.GOSS_HARAG,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a0/MHST3-Goss_Harag_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FANGED_BEAST,
    elements: [MonstieElement.ICE],
    star: 5,
    location: 'Old Capital Road',
    skills: [MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.CANYNE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/ae/MHST3-Canyne_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FANGED_BEAST,
    elements: [MonstieElement.NON],
    star: 5,
    location: 'Blessing Hill',
    skills: [MonstieSkill.WALL_CLIMB, MonstieSkill.GROUND_DIVE]
  },
  {
    name: Stories3MonstieName.CHATACABRA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a8/MHST3-Chatacabra_Icon.png',
    type: MonstieType.POWER,
    enragedType: MonstieType.TECH,
    genus: MonstieGenus.AMPHIBIAN,
    elements: [MonstieElement.NON],
    star: 1,
    location: [Stories3Location.BROADLEAF_BASIN, Stories3Location.BLIGHTSTONE_WOODS],
    stats: {
      Health: 5,
      Attack: 4,
      Speed: 4,
      Defense: 4,
      Crit: 0,
      StaminaBase: 0,
      StaminaRegen: 0
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.VERY_EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.NEUTRAL,
      [MonstieElement.WATER]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.DRAGON]: MonstieStrength.VERY_INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.TETRANADON,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7b/MHST3-Tetranadon_Icon.png',
    type: MonstieType.POWER,
    enragedType: MonstieType.TECH,
    genus: MonstieGenus.AMPHIBIAN,
    elements: [MonstieElement.WATER],
    star: 3,
    location: [Stories3Location.CATARACTS, Stories3Location.FROZEN_GROTTO],
    skills: [MonstieSkill.BREATH],
    stats: {
      Health: 7,
      Attack: 7,
      Crit: 0,
      Speed: 4,
      Defense: 3,
      StaminaRegen: 0,
      StaminaBase: 0
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.VERY_EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.NEUTRAL,
      [MonstieElement.DRAGON]: MonstieStrength.INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.SHOGUN_CEANATAUR,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a9/MHST3-Shogun_Ceanataur_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.CARAPACEON,
    elements: [MonstieElement.WATER],
    star: 3,
    location: "Colossal Dragon's Remains",
    skills: [MonstieSkill.BREATH, MonstieSkill.GROUND_DIVE]
  },
  {
    name: Stories3MonstieName.NERSCYLLA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e4/MHST3-Nerscylla_Icon.png',
    type: MonstieType.TECH,
    enragedType: MonstieType.SPEED,
    genus: MonstieGenus.TEMNOCERAN,
    elements: [MonstieElement.NON],
    star: 3,
    location: [Stories3Location.SUNPETAL_PLAINS],
    skills: [MonstieSkill.WALL_CLIMB],
    stats: {
      Health: 4,
      Attack: 4,
      Speed: 5,
      Defense: 5,
      Crit: 1,
      StaminaBase: 7,
      StaminaRegen: 7
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.NEUTRAL,
      [MonstieElement.DRAGON]: MonstieStrength.VERY_INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.SHROUDED_NERSCYLLA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7c/MHST3-Shrouded_Nerscylla_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.TEMNOCERAN,
    elements: [MonstieElement.NON],
    star: 4,
    location: 'Rococo Rocks',
    skills: [MonstieSkill.WALL_CLIMB]
  },
  {
    name: Stories3MonstieName.RAKNA_KADAKI,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a3/MHST3-Rakna-Kadaki_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.TEMNOCERAN,
    elements: [MonstieElement.FIRE],
    star: 5,
    location: "Death's Maw"
  },
  {
    name: Stories3MonstieName.BARROTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/44/MHST3-Barroth_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.BRUTE_WYVERN,
    elements: [MonstieElement.NON],
    star: 3,
    location: "Colossal Dragon's Remains",
    skills: [MonstieSkill.GROUND_DIVE]
  },
  {
    name: Stories3MonstieName.JADE_BARROTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/65/MHST3-Jade_Barroth_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.BRUTE_WYVERN,
    elements: [MonstieElement.ICE],
    star: 4,
    location: 'Old Capital Road',
    skills: [MonstieSkill.GROUND_DIVE]
  },
  {
    name: Stories3MonstieName.ANJANATH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/9a/MHST3-Anjanath_Icon.png',
    type: MonstieType.POWER,
    enragedType: MonstieType.TECH,
    genus: MonstieGenus.BRUTE_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 4,
    location: [Stories3Location.BROADLEAF_BASIN],
    skills: [MonstieSkill.BREATH],
    stats: {
      Health: 6,
      Attack: 7,
      Speed: 5,
      Defense: 4,
      Crit: 0,
      StaminaBase: 0,
      StaminaRegen: 0
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.VERY_EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.NEUTRAL,
      [MonstieElement.ICE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.DRAGON]: MonstieStrength.INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.FULGUR_ANJANATH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/89/MHST3-Fulgur_Anjanath_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.BRUTE_WYVERN,
    elements: [MonstieElement.THUNDER],
    star: 5,
    location: 'Old Capital Road',
    skills: [MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.GLAVENUS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/df/MHST3-Glavenus_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.BRUTE_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 5,
    location: 'Rococo Rocks',
    skills: [MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.HELLBLADE_GLAVENUS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/5c/MHST3-Hellblade_Glavenus_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.BRUTE_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 7,
    location: 'Mutation',
    skills: [MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.BRACHYDIOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/00/MHST3-Brachydios_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.BRUTE_WYVERN,
    elements: [MonstieElement.NON],
    star: 6,
    location: 'Glacial Caps'
  },
  {
    name: Stories3MonstieName.DEVILJHO,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0f/MHST3-Deviljho_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.BRUTE_WYVERN,
    elements: [MonstieElement.DRAGON],
    star: 7,
    location: 'Sacrosanctum/Lazlion',
    skills: [MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.PLESIOTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/4a/MHST3-Plesioth_Icon.png',
    type: MonstieType.SPEED,
    enragedType: MonstieType.POWER,
    genus: MonstieGenus.PISCINE_WYVERN,
    elements: [MonstieElement.WATER],
    star: 4,
    location: [Stories3Location.MIRROR_LAKE],
    skills: [MonstieSkill.SWIM, MonstieSkill.BREATH],
    stats: {
      Health: 6,
      Attack: 6,
      Speed: 7,
      Defense: 5,
      Crit: 1,
      StaminaBase: 4,
      StaminaRegen: 10
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.VERY_EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.NEUTRAL,
      [MonstieElement.DRAGON]: MonstieStrength.INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.GREEN_PLESIOTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/1/11/MHST3-Green_Plesioth_Icon.png',
    type: MonstieType.SPEED,
    enragedType: MonstieType.TECH,
    genus: MonstieGenus.PISCINE_WYVERN,
    elements: [MonstieElement.WATER],
    star: 5,
    location: [Stories3Location.MIRROR_LAKE, Stories3Location.BOUNTIFUL_DUNES],
    skills: [MonstieSkill.SWIM, MonstieSkill.BREATH],
    stats: {
      Health: 7,
      Attack: 7,
      Speed: 7,
      Defense: 3,
      Crit: 1,
      StaminaBase: 7,
      StaminaRegen: 7
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.VERY_EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.DRAGON]: MonstieStrength.NEUTRAL
    }
  },
  {
    name: Stories3MonstieName.ROYAL_LUDROTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e7/MHST3-Royal_Ludroth_Icon.png',
    type: MonstieType.POWER,
    enragedType: MonstieType.TECH,
    genus: MonstieGenus.LEVIATHAN,
    elements: [MonstieElement.WATER],
    star: 2,
    location: [Stories3Location.SUNPETAL_PLAINS, Stories3Location.MIRROR_LAKE],
    skills: [MonstieSkill.SWIM, MonstieSkill.BREATH],
    stats: {
      Health: 4,
      Attack: 5,
      Speed: 6,
      Defense: 4,
      Crit: 1,
      StaminaBase: 4,
      StaminaRegen: 10
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.NEUTRAL,
      [MonstieElement.DRAGON]: MonstieStrength.INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.PURPLE_LUDROTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/b3/MHST3-Purple_Ludroth_Icon.png',
    type: MonstieType.POWER,
    enragedType: MonstieType.TECH,
    genus: MonstieGenus.LEVIATHAN,
    elements: [MonstieElement.WATER],
    star: 3,
    location: [Stories3Location.CATARACTS, Stories3Location.BLESSING_HILL],
    skills: [MonstieSkill.SWIM, MonstieSkill.BREATH],
    stats: {
      Health: 5,
      Attack: 6,
      Speed: 6,
      Defense: 3,
      Crit: 1,
      StaminaBase: 4,
      StaminaRegen: 10
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.NEUTRAL,
      [MonstieElement.DRAGON]: MonstieStrength.INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.SOMNACANTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0c/MHST3-Somnacanth_Icon.png',
    type: MonstieType.TECH,
    enragedType: MonstieType.SPEED,
    genus: MonstieGenus.LEVIATHAN,
    elements: [MonstieElement.WATER],
    star: 4,
    location: [Stories3Location.CATARACTS, Stories3Location.FROZEN_GROTTO],
    skills: [MonstieSkill.SWIM, MonstieSkill.BREATH],
    stats: {
      Health: 6,
      Attack: 5,
      Speed: 7,
      Defense: 5,
      Crit: 1,
      StaminaBase: 4,
      StaminaRegen: 10
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.NEUTRAL,
      [MonstieElement.DRAGON]: MonstieStrength.INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.AURORA_SOMNACANTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/c8/MHST3-Aurora_Somnacanth_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.LEVIATHAN,
    elements: [MonstieElement.ICE],
    star: 5,
    location: 'Mt. Canalta, Frozen Grotto',
    skills: [MonstieSkill.SWIM, MonstieSkill.BREATH],
        ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.VERY_EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.DRAGON]: MonstieStrength.NEUTRAL
    }
  },
  {
    name: Stories3MonstieName.LAGIACRUS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8e/MHST3-Lagiacrus_Icon.png',
    type: MonstieType.POWER,
    enragedType: MonstieType.SPEED,
    genus: MonstieGenus.LEVIATHAN,
    elements: [MonstieElement.THUNDER],
    star: 5,
    location: 'Endangered Den (Mirror Lake)',
    skills: [MonstieSkill.SWIM, MonstieSkill.BREATH],
        stats: {
      Health: 6,
      Attack: 7,
      Speed: 6,
      Defense: 7,
      Crit: 0,
      StaminaBase: 7,
      StaminaRegen: 7
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.NEUTRAL,
      [MonstieElement.DRAGON]: MonstieStrength.EFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.IVORY_LAGIACRUS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/58/MHST3-Ivory_Lagiacrus_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.LEVIATHAN,
    elements: [MonstieElement.THUNDER],
    star: 6,
    location: 'Mutation',
    skills: [MonstieSkill.SWIM, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.MIZUTSUNE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/01/MHST3-Mizutsune_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.LEVIATHAN,
    elements: [MonstieElement.WATER],
    star: 5,
    location: 'Endangered Den (Frozen Grotto)',
    skills: [MonstieSkill.SWIM, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.SOULSEER_MIZUTSUNE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/8a/MHST3-Soulseer_Mizutsune_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.LEVIATHAN,
    elements: [MonstieElement.WATER],
    star: 7,
    location: 'Mutation',
    skills: [MonstieSkill.SWIM, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.ALMUDRON,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/ba/MHST3-Almudron_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.LEVIATHAN,
    elements: [MonstieElement.WATER],
    star: 5,
    location: "Colossal Dragon's Remains",
    skills: [MonstieSkill.SWIM, MonstieSkill.GROUND_DIVE]
  },
  {
    name: Stories3MonstieName.TOBI_KADACHI,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/2f/MHST3-Tobi-Kadachi_Icon.png',
    type: MonstieType.SPEED,
    enragedType: MonstieType.TECH,
    genus: MonstieGenus.FANGED_WYVERN,
    elements: [MonstieElement.THUNDER],
    star: 3,
    location: ['Broadleaf Basin'],
    skills: [MonstieSkill.FLY, MonstieSkill.WALL_CLIMB],
    stats: {
      Health: 4,
      Attack: 6,
      Speed: 7,
      Defense: 4,
      Crit: 6,
      StaminaBase: 4,
      StaminaRegen: 10
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.VERY_EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.NEUTRAL,
      [MonstieElement.DRAGON]: MonstieStrength.INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.ODOGARON,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/cb/MHST3-Odogaron_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FANGED_WYVERN,
    elements: [MonstieElement.NON],
    star: 5,
    location: "Death's Maw",
    skills: [MonstieSkill.WALL_CLIMB]
  },
  {
    name: Stories3MonstieName.EBONY_ODOGARON,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/3f/MHST3-Ebony_Odogaron_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FANGED_WYVERN,
    elements: [MonstieElement.DRAGON],
    star: 6,
    location: 'Sacrosanctum/Lazlion',
    skills: [MonstieSkill.WALL_CLIMB]
  },
  {
    name: Stories3MonstieName.ZINOGRE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/da/MHST3-Zinogre_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FANGED_WYVERN,
    elements: [MonstieElement.THUNDER],
    star: 5,
    location: 'Endangered Den (Rococo Rocks)',
    skills: [MonstieSkill.WALL_CLIMB]
  },
  {
    name: Stories3MonstieName.STYGIAN_ZINOGRE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/bc/MHST3-Stygian_Zinogre_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.FANGED_WYVERN,
    elements: [MonstieElement.DRAGON],
    star: 6,
    location: 'Mutation',
    skills: [MonstieSkill.WALL_CLIMB]
  },
  {
    name: Stories3MonstieName.THUNDERLORD_ZINOGRE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/07/MHST3-Thunderlord_Zinogre_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FANGED_WYVERN,
    elements: [MonstieElement.THUNDER],
    star: 7,
    location: 'Mutation',
    skills: [MonstieSkill.WALL_CLIMB]
  },
  {
    name: Stories3MonstieName.LUNAGARON,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/f2/MHST3-Lunagaron_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FANGED_WYVERN,
    elements: [MonstieElement.ICE],
    star: 5,
    location: 'Old Capital Road',
    skills: [MonstieSkill.WALL_CLIMB, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.MAGNAMALO,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/7/72/MHST3-Magnamalo_Icon.png',
    type: MonstieType.SPEED,
    enragedType: MonstieType.POWER,
    genus: MonstieGenus.FANGED_WYVERN,
    elements: [MonstieElement.NON],
    star: 6,
    location: [Stories3Location.OLD_CAPITAL_ROAD],
    skills: [MonstieSkill.WALL_CLIMB],
    stats: {
      Health: 7,
      Attack: 8,
      Speed: 7,
      Defense: 6,
      Crit: 1,
      StaminaBase: 4,
      StaminaRegen: 10
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.VERY_EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.EFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.NEUTRAL,
      [MonstieElement.DRAGON]: MonstieStrength.INEFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.PAOLUMU,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/21/MHST3-Paolumu_Icon.png',
    type: MonstieType.TECH,
    enragedType: MonstieType.SPEED,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON],
    star: 3,
    location: [Stories3Location.BLIGHTSTONE_WOODS],
    skills: [MonstieSkill.FLY],
    stats: {
      Health: 5,
      Attack: 3,
      Speed: 5,
      Defense: 6,
      Crit: 1,
      StaminaBase: 10,
      StaminaRegen: 4
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.VERY_EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.EFFECTIVE,
      [MonstieElement.DRAGON]: MonstieStrength.NEUTRAL
    }
  },
  {
    name: Stories3MonstieName.KHEZU,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/b4/MHST3-Khezu_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.THUNDER],
    star: 3,
    location: 'Frozen Grotto',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.RED_KHEZU,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/60/MHST3-Red_Khezu_Icon.png',
    type: MonstieType.TECH,
    enragedType: MonstieType.POWER,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.THUNDER],
    star: 4,
    location: 'Frozen Grotto, Glacial Caps',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.RATHIAN,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/42/MHST3-Rathian_Icon.png',
    type: MonstieType.SPEED,
    enragedType: MonstieType.POWER,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 4,
    location: [Stories3Location.SUNPETAL_PLAINS],
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH],
    stats: {
      Health: 5,
      Attack: 6,
      Crit: 1,
      Speed: 7,
      Defense: 6,
      StaminaRegen: 10,
      StaminaBase: 4
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_EFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.NEUTRAL,
      [MonstieElement.THUNDER]: MonstieStrength.EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.DRAGON]: MonstieStrength.VERY_EFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.PINK_RATHIAN,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/54/MHST3-Pink_Rathian_Icon.png',
    type: MonstieType.SPEED,
    enragedType: MonstieType.POWER,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 5,
    location: 'Mutation',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH],
    stats: {
      Health: 6,
      Attack: 7,
      Crit: 0,
      Speed: 7,
      Defense: 5,
      StaminaRegen: 0,
      StaminaBase: 0
    },
    ailmentRes: {
      [MonstieAilment.POISON]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.BURN]: MonstieStrength.INEFFECTIVE,
      [MonstieAilment.PARALYSIS]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.SLEEP]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BOMB]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLEED]: MonstieStrength.EFFECTIVE,
      [MonstieAilment.BLIND]: MonstieStrength.EFFECTIVE
    },
    elementRes: {
      [MonstieElement.NON]: MonstieStrength.NEUTRAL,
      [MonstieElement.FIRE]: MonstieStrength.VERY_INEFFECTIVE,
      [MonstieElement.WATER]: MonstieStrength.INEFFECTIVE,
      [MonstieElement.THUNDER]: MonstieStrength.EFFECTIVE,
      [MonstieElement.ICE]: MonstieStrength.NEUTRAL,
      [MonstieElement.DRAGON]: MonstieStrength.VERY_EFFECTIVE
    }
  },
  {
    name: Stories3MonstieName.DREADQUEEN_RATHIAN,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d5/MHST3-Dreadqueen_Rathian_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 7,
    location: 'Mutation',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.LEGIANA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/57/MHST3-Legiana_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.ICE],
    star: 4,
    location: 'Glacial Caps',
    skills: [MonstieSkill.FLY]
  },
  {
    name: Stories3MonstieName.BARIOTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/80/MHST3-Barioth_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.ICE],
    star: 4,
    location: 'Endangered Den (Glacial Caps)',
    skills: [MonstieSkill.FLY, MonstieSkill.WALL_CLIMB, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.SAND_BARIOTH,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/5/55/MHST3-Sand_Barioth_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON],
    star: 5,
    location: 'Mutation',
    skills: [MonstieSkill.FLY, MonstieSkill.WALL_CLIMB, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.NARGACUGA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/34/MHST3-Nargacuga_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON],
    star: 4,
    location: 'Endangered Den (Blessing Hill)',
    skills: [MonstieSkill.WALL_CLIMB, 'Stealth']
  },
  {
    name: Stories3MonstieName.GREEN_NARGACUGA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/fe/MHST3-Green_Nargacuga_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON],
    star: 5,
    location: 'Mutation',
    skills: [MonstieSkill.WALL_CLIMB, 'Stealth']
  },
  {
    name: Stories3MonstieName.SILVERWIND_NARGACUGA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/ca/MHST3-Silverwind_Nargacuga_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON],
    star: 7,
    location: 'Mutation',
    skills: [MonstieSkill.WALL_CLIMB, 'Stealth']
  },
  {
    name: Stories3MonstieName.ASTALOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/27/MHST3-Astalos_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.THUNDER],
    star: 5,
    location: 'Endangered Den (Mirror Lake)',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.BOLTREAVER_ASTALOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ed/MHST3-Boltreaver_Astalos_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.THUNDER],
    star: 7,
    location: 'Mutation',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.RATHA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/31/MHST3-Ratha_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 5,
    location: 'Always in party',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH],
    stats: {
      Health: 7,
      Attack: 7,
      Speed: 6,
      Defense: 5,
      Crit: 1,
      StaminaBase: 7,
      StaminaRegen: 7
    }
  },
  {
    name: Stories3MonstieName.RATHALOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/c/c4/MHST3-Rathalos_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 5,
    location: 'Sacrosanctum/Lazlion',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.AZURE_RATHALOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a5/MHST3-Azure_Rathalos_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 6,
    location: 'Mutation',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.DREADKING_RATHALOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/8/82/MHST3-Dreadking_Rathalos_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 7,
    location: 'Mutation',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.TIGREX,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/0/00/MHST3-Tigrex_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON],
    star: 5,
    location: "Endangered Den (Colossal Dragon's Remains)",
    skills: [MonstieSkill.WALL_CLIMB]
  },
  {
    name: Stories3MonstieName.BRUTE_TIGREX,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/3/3c/MHST3-Brute_Tigrex_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON],
    star: 6,
    location: 'Mutation',
    skills: [MonstieSkill.WALL_CLIMB]
  },
  {
    name: Stories3MonstieName.GRIMCLAW_TIGREX,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/dd/MHST3-Grimclaw_Tigrex_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON],
    star: 7,
    location: 'Mutation',
    skills: [MonstieSkill.WALL_CLIMB]
  },
  {
    name: Stories3MonstieName.GRAVIOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/9/92/MHST3-Gravios_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 5,
    location: 'Rococo Rocks',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH, MonstieSkill.GROUND_DIVE]
  },
  {
    name: Stories3MonstieName.BLACK_GRAVIOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ed/MHST3-Black_Gravios_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 6,
    location: "Bountiful Dunes, Death's Maw",
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH, MonstieSkill.GROUND_DIVE]
  },
  {
    name: Stories3MonstieName.DIABLOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d8/MHST3-Diablos_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON],
    star: 5,
    location: 'Rococo Rocks',
    skills: [MonstieSkill.GROUND_DIVE]
  },
  {
    name: Stories3MonstieName.BLACK_DIABLOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e1/MHST3-Black_Diablos_Icon.png',
    type: MonstieType.POWER,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON],
    star: 6,
    location: "Rococo Rocks, Death's Maw",
    skills: [MonstieSkill.GROUND_DIVE]
  },
  {
    name: Stories3MonstieName.BLOODBATH_DIABLOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/b/b4/MHST3-Bloodbath_Diablos_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON],
    star: 7,
    location: 'Mutation',
    skills: [MonstieSkill.GROUND_DIVE]
  },
  {
    name: Stories3MonstieName.SEREGIOS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/6/63/MHST3-Seregios_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.NON],
    star: 6,
    location: 'Mt. Canalta',
    skills: [MonstieSkill.FLY]
  },
  {
    name: Stories3MonstieName.ESPINAS,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/2/27/MHST3-Espinas_Icon.png',
    type: MonstieType.POWER,
    enragedType: MonstieType.SPEED,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.FIRE],
    star: 6,
    location: 'Bountiful Dunes',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.REY_DAU,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/4/44/MHST3-Rey_Dau_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.THUNDER],
    star: 6,
    location: "Death's Maw",
    skills: [MonstieSkill.FLY]
  },
  {
    name: Stories3MonstieName.ARKVELD,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/f/fb/MHST3-Arkveld_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.FLYING_WYVERN,
    elements: [MonstieElement.DRAGON],
    star: 6,
    location: 'Sacrosanctum/Lazlion',
    skills: [MonstieSkill.FLY]
  },
  {
    name: Stories3MonstieName.NAMIELLE,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/ee/MHST3-Namielle_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.ELDER_DRAGON,
    elements: [MonstieElement.WATER],
    star: 7,
    location: 'Mirror Lake',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.VELKHANA,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/e/e2/MHST3-Velkhana_Icon.png',
    type: MonstieType.TECH,
    genus: MonstieGenus.ELDER_DRAGON,
    elements: [MonstieElement.ICE],
    star: 7,
    location: 'Glacial Caps',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  },
  {
    name: Stories3MonstieName.MALZENO,
    iconUrl: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a0/MHST3-Malzeno_Icon.png',
    type: MonstieType.SPEED,
    genus: MonstieGenus.ELDER_DRAGON,
    elements: [MonstieElement.DRAGON],
    star: 7,
    location: 'Sacrosanctum/Lazlion',
    skills: [MonstieSkill.FLY, MonstieSkill.BREATH]
  }
];
