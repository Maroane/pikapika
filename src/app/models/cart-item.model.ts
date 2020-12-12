import { Card } from './card.model';

export class CartItem {
  item: Card;
  count: number;

  constructor(card: Card) {
    this.item = card;
    this.count = 1;
  }
}
