import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Stories3MonstieName } from '../../models/monstie-list.stories3.model';
import { Monstie, MonstieStatus } from '../../models/monstie.model';
import { LoadFromDefaultModel } from './monstie-dex.actions';
import { patch } from '@ngxs/store/operators';
import { stories3save1 } from '../../models/saves.model';

export interface MonstieDexStateModel {
  showIntroModal: boolean;
  monstieNameStatusMap: Partial<Record<Stories3MonstieName, MonstieStatus>>;
}

@State<MonstieDexStateModel>({
  name: 'monstieDexState',
  defaults: {
    showIntroModal: true,
    monstieNameStatusMap: {
      [Stories3MonstieName.RATHA]: MonstieStatus.OWNED,
      [Stories3MonstieName.TOBI_KADACHI]: MonstieStatus.OWNED,
      [Stories3MonstieName.YIAN_KUT_KU]: MonstieStatus.OWNED,
      [Stories3MonstieName.PUKEI_PUKEI]: MonstieStatus.SEEN,
      [Stories3MonstieName.GRAVIOS]: MonstieStatus.SEEN,
      [Stories3MonstieName.LEGIANA]: MonstieStatus.SEEN
    }
  }
})
@Injectable()
export class MonstieDexState {
  @Selector()
  static getAllData(state: MonstieDexStateModel): MonstieDexStateModel {
    return MonstieDexState.getInstanceState(state);
  }

  @Selector() static getMonstieStatuses(state: MonstieDexStateModel): Partial<Record<Stories3MonstieName, MonstieStatus>> {
    return state.monstieNameStatusMap;
  }

  @Selector() static getShowIntroModal(state: MonstieDexStateModel): boolean {
    return state.showIntroModal;
  }

  private static setInstanceState(state: MonstieDexStateModel): MonstieDexStateModel {
    return { ...state };
  }

  private static getInstanceState(state: MonstieDexStateModel): MonstieDexStateModel {
    return { ...state };
  }

  @Action(LoadFromDefaultModel) loadFromDefaultModel({ setState }: StateContext<MonstieDexStateModel>) {
    setState(patch({ monstieNameStatusMap: stories3save1 }));
  }
  /* 
  @Action(SetAuthData)
  setAuthData({ setState }: StateContext<MonstieDexStateModel>, { payload }: SetAuthData) {
    setState(MonstieDexState.setInstanceState(payload));
  } */
}
