import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ISearchState } from '../state/search.state';

// tslint:disable-next-line:typedef
const selectSearch = (state: IAppState) => state.searchData;

// tslint:disable-next-line:typedef
export const selectSearchData = createSelector(
  selectSearch,
  (state: ISearchState) => state.searchData
);
