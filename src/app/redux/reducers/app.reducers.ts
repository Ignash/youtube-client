import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { customReducers } from './custom.reducers';
import { searchReducers } from './search.reducers';

// tslint:disable-next-line:no-any
export const appReducers: ActionReducerMap<IAppState, any> = {
  searchData: searchReducers,
  customItem: customReducers
};
