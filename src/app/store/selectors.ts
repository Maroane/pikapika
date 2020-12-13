import { createSelector } from '@ngrx/store';
import { AppState } from './state';

export const selectAppState = (state: any) => state.appstate;

export const selectCart = (appstate: AppState) => appstate.cart;

export const selectBudget = (appstate: AppState) => appstate.budget;

export const getCart = createSelector(selectAppState, selectCart);

export const getBudget = createSelector(selectAppState, selectBudget);
