import { Card } from '../../../models/card.model';
import { CartItem } from 'src/app/models/cart-item.model';
import { getTotalItems, getTotalPrice } from './cart.utils';

describe('Cart Utils', () => {
  const card_a: Card = {
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

  const card_b: Card = {
    id: 'testID',
    name: 'test',
    imageUrl: 'url',
    imageUrlHiRes: 'urlHiRes',
    supertype: 'supertype',
    artist: 'artist',
    price: 2,
    rarity: 'rarity',
    series: 'series',
    set: 'set',
    setCode: 'setCode',
    number: 1,
  };

  const cartItem_a = new CartItem(card_a);
  const cartItem_b = new CartItem(card_b);
  cartItem_b.count = 3;

  const cart = [cartItem_a, cartItem_b];

  describe('getTotalPrice()', () => {
    it('should get the right total price', () => {
      expect(getTotalPrice(cart)).toEqual(7);
    });

    it('cart empty should return 0', () => {
      expect(getTotalPrice([])).toEqual(0);
    });
  });

  describe('getTotalItems()', () => {
    it('should get the right item count', () => {
      expect(getTotalItems(cart)).toEqual(4);
    });

    it('cart empty should return 0', () => {
      expect(getTotalItems([])).toEqual(0);
    });
  });
});
