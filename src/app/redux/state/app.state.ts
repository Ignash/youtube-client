import { ISearchState, initialSearchState } from './search.state';
import { ICustomState, initialCustomState } from './custom.state';

export interface IAppState {
  searchData: ISearchState;
  customItem: ICustomState;
}

export const initialAppState: IAppState = {
  searchData: initialSearchState,
  customItem: initialCustomState
};
