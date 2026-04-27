export interface Monstie {
  name: string;
  eggUrl: string;
  type: MonstieType;
  genus: MonstieGenus;
  star?: number;
  skills?: string[];
  number?: number;
  owned?: boolean;
  elements?: MonstieElement[];
  location?: string;
}

export enum MonstieElement {
  NON = 'Non-Elem',
  FIRE = 'Fire',
  DRAGON = 'Dragon',
  WATER = 'Water',
  THUNDER = 'Thunder',
  ICE = 'Ice',
  UNKNOWN = 'Unknown'
}

export enum MonstieGenus {
  FANGED_BEAST = 'Fanged Beast',
  HERBIVORE = 'Herbivore',
  LEVIATHAN = 'Leviathan',
  AMPHIBIAN = 'Amphibian',
  TEMNOCERAN = 'Temnoceran',
  BIRD_WYVERN = 'Bird Wyvern',
  FLYING_WYVERN = 'Flying Wyvern',
  BRUTE_WYVERN = 'Brute Wyvern',
  FANGED_WYVERN = 'Fanged Wyvern',
  PISCINE_WYVERN = 'Piscine Wyvern',
  CARAPACEON = 'Carapaceon',
  ELDER_DRAGON = 'Elder Dragon',
  UNKNOWN = 'Unknown'
}

export enum MonstieType {
  POWER = 'Power',
  SPEED = 'Speed',
  TECH = 'Technical',
  UNKNOWN = 'Unknown'
}
