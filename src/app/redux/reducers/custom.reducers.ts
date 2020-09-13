import { CustomActions, ECustomActions } from '../actions/custom.actions';
import { initialCustomState, ICustomState } from './../state/custom.state';

// tslint:disable-next-line:typedef
export const customReducers = (
  state = initialCustomState,
  action: CustomActions
): ICustomState => {
  switch (action.type) {
    case ECustomActions.AddToCustom: {
      console.log(state);
      console.log(action.payload);
      return {
        ...state,
        customItems: [...state.customItems, action.payload]
      };
    }
    case ECustomActions.SetCustom: {
      console.log('SetCustom:' + JSON.stringify(state));
      return {
        ...state
      };
    }

    default:
      return state;
  }
};
