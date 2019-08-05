import frData, { footballClubs as frFootballClubs } from './france.js';
import enData, { footballClubs as enFootballClubs } from './england.js';
import gerData, { footballClubs as gerFootballClubs } from './germany.js';

export const jsonData = [
  {...enData},
  {...gerData},
  {...frData}
];

export const footballClubs = {
  EN: {...enFootballClubs},
  GER: {...gerFootballClubs},
  FR: {...frFootballClubs}
};
