import { Stories2MonstieNames } from './monstie-list.stories2.model';
import { Stories3MonstieName } from './monstie-list.stories3.model';

export interface Monstie {
  name: Stories2MonstieNames | Stories3MonstieName | string;
  iconUrl: string;
  type: MonstieType;
  enragedType?: MonstieType;
  genus: MonstieGenus;
  star?: number;
  skills?: string[];
  number?: number;
  owned?: boolean;
  status?: MonstieStatus;
  elements?: MonstieElement[];
  ailmentRes?: MonstieAilmentRes;
  elementRes?: MonstieElementRes;
  stats?: MonstieStatTrends;
  location?: string | Array<string | Stories3Location>;
  canDisplay?: boolean;
}

export enum MonstieStatus {
  UNKNOWN = 'Unknown',
  SEEN = 'Seen',
  OWNED = 'Owned'
}

export enum MonstieElement {
  NON = 'Non-Elem',
  FIRE = 'Fire',
  DRAGON = 'Dragon',
  WATER = 'Water',
  THUNDER = 'Thunder',
  ICE = 'Ice'
}

export enum MonstieAilment {
  POISON = 'Poison',
  BURN = 'Burn',
  PARALYSIS = 'Paralysis',
  SLEEP = 'Sleep',
  BOMB = 'Bomb',
  BLEED = 'Bleed',
  BLIND = 'Blind'
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
  NON_CAPTURABLE = 'zzzzzzz',
  UNKNOWN = 'Unknown'
}

export enum MonstieType {
  POWER = 'Power',
  SPEED = 'Speed',
  TECH = 'Technical',
  UNKNOWN = 'Unknown'
}

export enum MonstieStrength {
  INEFFECTIVE = 'Ineffective',
  VERY_INEFFECTIVE = 'Very Ineffective',
  NEUTRAL = 'Neutral',
  EFFECTIVE = 'Effective',
  VERY_EFFECTIVE = 'Very Effective'
}

export interface MonstieAilmentRes {
  [MonstieAilment.POISON]?: MonstieStrength;
  [MonstieAilment.BURN]?: MonstieStrength;
  [MonstieAilment.PARALYSIS]?: MonstieStrength;
  [MonstieAilment.SLEEP]?: MonstieStrength;
  [MonstieAilment.BOMB]?: MonstieStrength;
  [MonstieAilment.BLEED]?: MonstieStrength;
  [MonstieAilment.BLIND]?: MonstieStrength;
}

export interface MonstieElementRes {
  [MonstieElement.NON]?: MonstieStrength;
  [MonstieElement.FIRE]?: MonstieStrength;
  [MonstieElement.WATER]?: MonstieStrength;
  [MonstieElement.THUNDER]?: MonstieStrength;
  [MonstieElement.ICE]?: MonstieStrength;
  [MonstieElement.DRAGON]?: MonstieStrength;
}

export interface MonstieStatTrends {
  Health: number;
  Attack: number;
  Speed: number;
  Defense: number;
  StaminaBase?: number;
  StaminaRegen?: number;
  Crit?: number;
}

export enum Stories3Location {
  HOWLINYOWL_FOREST = 'Howlinyowl Forest',
  BLESSING_HILL = 'Blessing Hill',
  BLIGHTSTONE_WOODS = 'Blightstone Woods',
  SUNPETAL_PLAINS = 'Sunpetal Plains',
  ASHEN_PASS = 'Ashen Pass',
  FROZEN_GROTTO = 'Frozen Grotto',
  CATARACTS = 'Cataracts',
  MIRROR_LAKE = 'Mirror Lake',
  BROADLEAF_BASIN = 'Broadleaf Basin',
  BOUNTIFUL_DUNES = 'Bountiful Dunes',
}
