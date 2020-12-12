import { createSelector } from '@ngrx/store';
import { AppState } from './state';

export const selectCart = createSelector(
  (state: any) => state.appstate,
  (appstate: AppState) => appstate.cart
);
