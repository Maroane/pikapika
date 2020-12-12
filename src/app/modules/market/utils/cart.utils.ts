import { CartItem } from 'src/app/models/cart-item.model';

export function getTotalPrice(cart: CartItem[]): number {
  if (!cart) return 0;
  const total = cart.reduce((total: number, cartItem: CartItem) => total + cartItem.count * cartItem.item.price, 0);
  return total;
}

export function getTotalItems(cart: CartItem[]): number {
  if (!cart) return 0;
  const total = cart.reduce((total: number, cartItem: CartItem) => total + cartItem.count, 0);
  return total;
}
