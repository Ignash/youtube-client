import { Action } from '@ngrx/store';

import { SearchItemModel } from '../../core/models/search-item.model';

export enum ESearchActions {
  GetSearchData = 'Get Search Data',
  GetSearchDataSuccess = 'Get Search Data Success',
}

export class GetSearchData implements Action {
  // tslint:disable-next-line:typedef
  public readonly type = ESearchActions.GetSearchData;
}
export class GetSearchDataSuccess implements Action {
  // tslint:disable-next-line:typedef
  public readonly type = ESearchActions.GetSearchDataSuccess;
  constructor(public payload: SearchItemModel[]) {}
}

export type SearchActions = GetSearchData | GetSearchDataSuccess ;
