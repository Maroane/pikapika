import { Component, Input, OnInit } from '@angular/core';

import { CartItem } from '../../../../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input()
  public cartItem: CartItem;

  constructor() {}

  ngOnInit(): void {}

  public getItemTotal(): number {
    return this.cartItem.item.price * this.cartItem.count;
  }
}
