import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.model';
import { getTotalPrice, getTotalItems } from '../../../utils/cart.utils';

@Component({
  selector: 'app-cart-full',
  templateUrl: './cart-full.component.html',
  styleUrls: ['./cart-full.component.scss'],
})
export class CartFullComponent implements OnInit {
  @Input()
  public cart: CartItem[];
  public totalPrice: number = 0;
  public totalItems: number = 0;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.cart) {
      this.totalPrice = getTotalPrice(this.cart);
      this.totalItems = getTotalItems(this.cart);
    }
  }
}
