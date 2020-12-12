import { Card } from './../models/card.model';
import { CartItem } from './../models/cart-item.model';
import * as StoreActions from './actions';
import { reducer } from './reducers';
import { initialState, AppState } from './state';

describe('StateReducer', () => {
  describe('Add to cart action', () => {
    it('should only add the cart item to the store', () => {
      const card: Card = {
        id: 'testID',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        price: 1,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        setCode: 'setCode',
        number: 1,
      };
      const newCartItem = new CartItem(card);
      const newState: AppState = {
        cart: [newCartItem],
      };

      const action = new StoreActions.AddToCartAction({ card: card });
      const state = reducer(initialState, action);
      expect(state).toEqual(newState);
    });

    it('should not add twice the same cart item', () => {
      const card: Card = {
        id: 'testID',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        price: 1,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        setCode: 'setCode',
        number: 1,
      };
      const newCartItem = new CartItem(card);
      const initialState: AppState = {
        cart: [newCartItem],
      };
      const newState: AppState = {
        cart: [newCartItem, newCartItem],
      };

      const action = new StoreActions.AddToCartAction({ card: card });
      const state = reducer(initialState, action);
      expect(state).toEqual(initialState);
      expect(state).not.toBe(newState);
    });
  });

  describe('Update cart item action', () => {
    it('should only update the count attribute', () => {
      const card: Card = {
        id: 'testID',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        price: 1,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        setCode: 'setCode',
        number: 1,
      };
      const initialCartItem = new CartItem(card);
      const initialState: AppState = {
        cart: [initialCartItem],
      };
      const newCartItem = new CartItem(card);
      newCartItem.count = 3;
      const newState: AppState = {
        cart: [newCartItem],
      };

      const action = new StoreActions.UdpateCartItemCountAction({ count: 3, cardId: card.id });
      const state = reducer(initialState, action);
      expect(state).toEqual(newState);
    });
  });

  describe('Remove cart item action', () => {
    it('should only remove the specified card item', () => {
      const card_a: Card = {
        id: 'testIDa',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        price: 1,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        setCode: 'setCode',
        number: 1,
      };
      const card_b: Card = {
        id: 'testIDb',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        price: 1,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        setCode: 'setCode',
        number: 1,
      };
      const card_c: Card = {
        id: 'testIDc',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        price: 1,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        setCode: 'setCode',
        number: 1,
      };
      const initialCartItem_a = new CartItem(card_a);
      const initialCartItem_b = new CartItem(card_b);
      const initialCartItem_c = new CartItem(card_c);
      const initialState: AppState = {
        cart: [initialCartItem_a, initialCartItem_b, initialCartItem_c],
      };
      const newState: AppState = {
        cart: [initialCartItem_a, initialCartItem_c],
      };

      const action = new StoreActions.RemoveFromCartAction({ cardId: card_b.id });
      const state = reducer(initialState, action);
      expect(state).toEqual(newState);
    });
  });

  describe('Clear cart action', () => {
    it('should clear the cart', () => {
      const card_a: Card = {
        id: 'testIDa',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        price: 1,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        setCode: 'setCode',
        number: 1,
      };
      const card_b: Card = {
        id: 'testIDb',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        price: 1,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        setCode: 'setCode',
        number: 1,
      };
      const card_c: Card = {
        id: 'testIDc',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        price: 1,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        setCode: 'setCode',
        number: 1,
      };
      const initialCartItem_a = new CartItem(card_a);
      const initialCartItem_b = new CartItem(card_b);
      const initialCartItem_c = new CartItem(card_c);
      const initialState: AppState = {
        cart: [initialCartItem_a, initialCartItem_b, initialCartItem_c],
      };
      const newState: AppState = {
        cart: [],
      };

      const action = new StoreActions.ClearCartAction();
      const state = reducer(initialState, action);
      expect(state).toEqual(newState);
    });
  });
});
