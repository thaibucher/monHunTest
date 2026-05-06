import { Stories3MonstieName } from '../../models/monstie-list.stories3.model';
import { MonstieStatus } from '../../models/monstie.model';
import { MonstieDexStateModel } from './monstie-dex.state';

export class LoadFromDefaultModel {
  static readonly type = '[Dex] Load from default Model';
  constructor() {}
}

export class UpdateMonstie {
  static readonly type = '[Dex] Update monstie';
  constructor(monstieName: Stories3MonstieName, status: MonstieStatus){}
}

export class ClearAllMonsties {
  static readonly type = '[Dex] Clear all monsties';
}