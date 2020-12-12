import { CartItem } from './../models/cart-item.model';

export interface AppState {
  cart: CartItem[];
}

export const initialState: AppState = {
  cart: [],
};
