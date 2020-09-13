import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ICustomState } from '../state/custom.state';

// tslint:disable-next-line:typedef
const customState = (state: IAppState) => state.customItem;

// tslint:disable-next-line:typedef
export const selectCustom = createSelector(
  customState,
  (state: ICustomState) => state.customItems
);
