import { Card } from './../models/card.model';
import { Action } from '@ngrx/store';

export enum ActionTypes {
  ADD_TO_CART = '[Cart] ADD_TO_CART',
  REMOVE_FROM_CART = '[Cart] REMOVE_FROM_CART',
  UPDATE_CART_ITEM_COUNT = '[Cart] UPDATE_CART_ITEM_COUNT',
  CLEAR_CART = '[Cart] CLEAR_CART',
  UPDATE_BUDGET = '[Budget] UPDATE_BUDGET',
}

export class AddToCartAction implements Action {
  readonly type = ActionTypes.ADD_TO_CART;
  constructor(public payload: { card: Card }) {}
}

export class RemoveFromCartAction implements Action {
  readonly type = ActionTypes.REMOVE_FROM_CART;
  constructor(public payload: { cardId: string }) {}
}

export class UdpateCartItemCountAction implements Action {
  readonly type = ActionTypes.UPDATE_CART_ITEM_COUNT;
  constructor(public payload: { cardId: string; count: number }) {}
}

export class ClearCartAction implements Action {
  readonly type = ActionTypes.CLEAR_CART;
  constructor() {}
}

export class UpdateBudgetAction implements Action {
  readonly type = ActionTypes.UPDATE_BUDGET;
  constructor(public payload: { budget: number }) {}
}

export type Actions = AddToCartAction | RemoveFromCartAction | UdpateCartItemCountAction | ClearCartAction | UpdateBudgetAction;
