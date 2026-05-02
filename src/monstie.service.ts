import { Injectable } from '@angular/core';
import { Monstie, MonstieStatus, MonstieType } from './models/monstie.model';
import { Stories3MonstieName, stories3Monsties } from './models/monstie-list.stories3.model';
import { Stories2MonstieNames, stories2Monsties } from './models/monstie-list.stories2.model';

@Injectable({
  providedIn: 'root'
})
export class MonstieService {
  constructor() {}

  getStories2Monsties(selectedSave: Stories2MonstieNames[] | string[]): Monstie[] {
    return stories2Monsties.map((monstie: Monstie) => {
      const baseMonstie: Monstie = monstie;
      baseMonstie.owned = selectedSave.includes(monstie.name as Stories2MonstieNames);
      return baseMonstie;
    });
  }

  getStories3Monsties(selectedSave: Partial<Record<Stories3MonstieName, MonstieStatus>>): Monstie[] {
    const updatedStatusMonsties: Monstie[] = stories3Monsties.map((monstie: Monstie) => {
      const baseMonstie: Monstie = monstie;
      baseMonstie.status = selectedSave[monstie.name as Stories3MonstieName] || MonstieStatus.UNKNOWN;
      return baseMonstie;
    });
    // Monsties generally have an enrage type that beats whatever their default type is, so we assume that unless we manually update
    // the monstie to something else
    const updatedTypeMonsties: Monstie[] = updatedStatusMonsties.map((monstie: Monstie) => {
      const enrageType =
        monstie.type === MonstieType.POWER ? MonstieType.TECH : monstie.type === MonstieType.TECH ? MonstieType.SPEED : MonstieType.POWER;
      return { ...monstie, enragedType: monstie.enragedType || enrageType };
    });
    return updatedTypeMonsties;
  }
}
