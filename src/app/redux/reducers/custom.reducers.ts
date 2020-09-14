import { CustomActions, ECustomActions } from '../actions/custom.actions';
import { initialCustomState, ICustomState } from './../state/custom.state';

// tslint:disable-next-line:typedef
export const customReducers = (
  state = initialCustomState,
  action: CustomActions
): ICustomState => {
  switch (action.type) {
    case ECustomActions.AddToCustom: {
      return {
        ...state,
        customItems: [...state.customItems, action.payload]
      };
    }
    case ECustomActions.SetCustom: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};
