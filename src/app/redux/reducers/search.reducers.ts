import { ESearchActions } from './../actions/search.actions';
import { SearchActions } from '../actions/search.actions';
import { initialSearchState, ISearchState } from '../state/search.state';

// tslint:disable-next-line:typedef
// tslint:disable-next-line:variable-name
// tslint:disable-next-line:typedef
export const searchReducers = (
  state = initialSearchState,
  action: SearchActions
): ISearchState => {
  switch (action.type) {
    case ESearchActions.GetSearchDataSuccess: {
      console.log(state);
      return {
        ...state,
        searchData: action.payload
      };
    }

    default:
      return state;
  }
};
