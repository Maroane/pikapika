import { Component, Input, OnInit } from '@angular/core';

import { CartItem } from '../../../../../models/cart-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input()
  public cart: CartItem[];

  constructor() {}

  ngOnInit(): void {}
}
