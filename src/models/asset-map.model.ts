import { MonstieType, MonstieElement, MonstieAilment, MonstieStrength, MonstieGenus } from './monstie.model';

export const monstieTypeIconMap: Record<MonstieType, string> = {
  [MonstieType.POWER]: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d3/MHST2-Power_Type.svg',
  [MonstieType.SPEED]: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d9/MHST2-Speed_Type.svg',
  [MonstieType.TECH]: 'https://static.wikia.nocookie.net/monsterhunter/images/5/5b/MHST2-Technical_Type.svg',
  [MonstieType.UNKNOWN]: 'assets/unknown.png'
};

export const monstieElementIconMap: Record<MonstieElement, string> = {
  [MonstieElement.NON]: 'https://static.wikia.nocookie.net/monsterhunter/images/1/1d/MHST2-Element_Neutral_Icon.svg',
  [MonstieElement.FIRE]: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a7/Status_Effect-Fireblight_MH4_Icon.png',
  [MonstieElement.WATER]: 'https://static.wikia.nocookie.net/monsterhunter/images/1/16/Status_Effect-Waterblight_MH4_Icon.png',
  [MonstieElement.THUNDER]: 'https://static.wikia.nocookie.net/monsterhunter/images/a/ac/Status_Effect-Thunderblight_MH4_Icon.png',
  [MonstieElement.ICE]: 'https://static.wikia.nocookie.net/monsterhunter/images/6/6c/Status_Effect-Iceblight_MH4_Icon.png',
  [MonstieElement.DRAGON]: 'https://static.wikia.nocookie.net/monsterhunter/images/a/ae/Status_Effect-Dragonblight_MH4_Icon.png'
};

export const monstieAilmentIconMap: Record<MonstieAilment, string> = {
  [MonstieAilment.POISON]: 'https://static.wikia.nocookie.net/monsterhunter/images/3/32/StatusEffect05.png',
  [MonstieAilment.BURN]: 'https://static.wikia.nocookie.net/monsterhunter/images/a/a7/Status_Effect-Fireblight_MH4_Icon.png',
  [MonstieAilment.PARALYSIS]: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7d/StatusEffect29.png',
  [MonstieAilment.SLEEP]: 'https://static.wikia.nocookie.net/monsterhunter/images/0/0b/StatusEffect01.png',
  [MonstieAilment.BOMB]: 'https://static.wikia.nocookie.net/monsterhunter/images/4/4d/Status_Effect-Blastblight_MH4_Icon.png',
  [MonstieAilment.BLEED]: 'https://static.wikia.nocookie.net/monsterhunter/images/d/d6/Status_Effect-Bleeding_Custom_Icon.png',
  [MonstieAilment.BLIND]: 'https://static.wikia.nocookie.net/monsterhunter/images/7/7a/Status_Effect-Dark_MHFGG_Icon.png'
};

export const monstieStrengthIconMap: Record<MonstieStrength, string> = {
  [MonstieStrength.INEFFECTIVE]: 'assets/Ineffective.png',
  [MonstieStrength.VERY_INEFFECTIVE]: 'assets/VeryIneffective.png',
  [MonstieStrength.NEUTRAL]: 'assets/Neutral.png',
  [MonstieStrength.EFFECTIVE]: 'assets/Effective.png',
  [MonstieStrength.VERY_EFFECTIVE]: 'assets/VeryEffective.png'
};

export const monstieGenusSortMap: Map<MonstieGenus, number> = new Map(Object.values(MonstieGenus).map((value, index) => [value, index]));
export const monstieGenusColorMap: Record<MonstieGenus, string> = {
  [MonstieGenus.UNKNOWN]: '#FFFFFF',
  [MonstieGenus.HERBIVORE]: '#A3D977',
  [MonstieGenus.NEOPTERON]: '#FFFFFF',
  [MonstieGenus.LYNIAN]: '#FFFFFF',

  [MonstieGenus.BIRD_WYVERN]: '#F5DEB3',
  [MonstieGenus.FANGED_BEAST]: '#FFFFE0',
  [MonstieGenus.AMPHIBIAN]: '#EFA86B',
  [MonstieGenus.CARAPACEON]: '#A52A2A',
  [MonstieGenus.TEMNOCERAN]: '#DDA0DD',
  [MonstieGenus.BRUTE_WYVERN]: '#90EE90',
  [MonstieGenus.PISCINE_WYVERN]: '#008080',
  [MonstieGenus.LEVIATHAN]: '#7DC4E4',
  [MonstieGenus.FANGED_WYVERN]: '#DDA0DD',
  [MonstieGenus.FLYING_WYVERN]: '#ADD8E6',
  [MonstieGenus.ELDER_DRAGON]: '#FFFFFF'
};

function dullerHex(hex: string, lum: number = 0): string {
  const cleanHex: string = hex.replace(/[^0-9a-f]/gi, '');
  let rgb: string = '#';
  for (let i: number = 0; i < 3; i++) {
    const channelValue: number = parseInt(cleanHex.slice(i * 2, i * 2 + 2), 16);
    const adjusted: number = Math.round(Math.min(Math.max(0, channelValue + channelValue * lum), 255));
    rgb += adjusted.toString(16).padStart(2, '0');
  }
  return rgb;
}

export const monstieGenusColorMapDull: Record<MonstieGenus, string> = Object.entries(monstieGenusColorMap).reduce(
  (acc, [key, color]) => ({
    ...acc,
    [key as MonstieGenus]: dullerHex(color, -0.6)
  }),
  {} as Record<MonstieGenus, string>
);
