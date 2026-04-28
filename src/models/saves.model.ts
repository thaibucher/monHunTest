import { Stories3MonstieName } from './monstie-list.stories3.model';
import { MonstieStatus } from './monstie.model';

export const stories3save1: Partial<Record<Stories3MonstieName, MonstieStatus>> = {
  [Stories3MonstieName.RATHA]: MonstieStatus.OWNED,
  [Stories3MonstieName.TOBI_KADACHI]: MonstieStatus.OWNED,
  [Stories3MonstieName.YIAN_KUT_KU]: MonstieStatus.OWNED,
  [Stories3MonstieName.PAOLUMU]: MonstieStatus.OWNED,
  [Stories3MonstieName.VELOCIDROME]: MonstieStatus.OWNED,
  [Stories3MonstieName.GYPCEROS]: MonstieStatus.OWNED,
  [Stories3MonstieName.NERSCYLLA]: MonstieStatus.OWNED,
  [Stories3MonstieName.ROYAL_LUDROTH]: MonstieStatus.OWNED,
  [Stories3MonstieName.BLUE_YIAN_KUT_KU]: MonstieStatus.OWNED,
  [Stories3MonstieName.GREEN_PLESIOTH]: MonstieStatus.OWNED,
  [Stories3MonstieName.PLESIOTH]: MonstieStatus.OWNED,
  [Stories3MonstieName.PURPLE_GYPCEROS]: MonstieStatus.OWNED,
  [Stories3MonstieName.CHATACABRA]: MonstieStatus.OWNED,
  [Stories3MonstieName.RATHIAN]: MonstieStatus.OWNED
};

const stories2save1: string[] = [
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

const stories2save2: string[] = ['Velocidrome', 'Kulu-Ya-Ku', 'Yian Kut-Ku', 'Bulldrome', 'Pukei-Pukei'];
