import { ActionTypes, Actions } from './actions';
import { AppState, initialState } from './state';
import { CartItem } from './../models/cart-item.model';

export function reducer(state: AppState = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const { card } = action.payload;
      const found = state.cart.find((cartItem) => {
        return cartItem.item.id === card.id;
      });
      const newCartList = state.cart.slice();
      if (!found) {
        newCartList.push(new CartItem(card));
      }
      return { ...state, cart: newCartList };
    }

    case ActionTypes.REMOVE_FROM_CART: {
      const { cardId } = action.payload;

      const newCartList = state.cart.slice();

      const found = state.cart.find((cartItem) => {
        return cartItem.item.id === cardId;
      });

      if (found) {
        newCartList.splice(newCartList.indexOf(found), 1);
      }

      return { ...state, cart: newCartList };
    }
    case ActionTypes.UPDATE_CART_ITEM_COUNT: {
      const { cardId, count } = action.payload;
      const newCartList = state.cart.map((cartItem) => {
        if (cartItem.item.id === cardId) {
          const newCartItem = new CartItem(cartItem.item);
          newCartItem.count = count;
          return newCartItem;
        }
        return cartItem;
      });

      return { ...state, cart: newCartList };
    }
    case ActionTypes.CLEAR_CART: {
      return { ...state, cart: [] };
    }

    default:
      return state;
  }
}
