import { CartItem } from '../../../../../models/cart-item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item-review',
  templateUrl: './cart-item-review.component.html',
  styleUrls: ['./cart-item-review.component.scss'],
})
export class CartItemReviewComponent implements OnInit {
  @Input()
  public cartItem: CartItem;

  constructor() {}

  ngOnInit(): void {}

  public getItemTotal(): number {
    return this.cartItem.item.price * this.cartItem.count;
  }
}
