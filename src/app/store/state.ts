import { CartItem } from './../models/cart-item.model';

export interface AppState {
  cart: CartItem[];
  budget: number;
}

export const initialState: AppState = {
  cart: [],
  budget: 0,
};
