import { CartItem } from '../../../../../models/cart-item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item-full',
  templateUrl: './cart-item-full.component.html',
  styleUrls: ['./cart-item-full.component.scss'],
})
export class CartItemFullComponent implements OnInit {
  @Input()
  public cartItem: CartItem;

  constructor() {}

  ngOnInit(): void {}

  public getItemTotal(): number {
    return this.cartItem.item.price * this.cartItem.count;
  }
}
