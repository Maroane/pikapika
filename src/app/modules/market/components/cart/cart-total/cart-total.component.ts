import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CartItem } from 'src/app/models/cart-item.model';
import { getTotalPrice, getTotalItems } from '../../../utils/cart.utils';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.scss'],
})
export class CartTotalComponent implements OnInit {
  @Input()
  public items: CartItem[];
  public totalPrice: number;
  public totalItems: number;

  constructor() {}

  ngOnInit(): void {
    this.totalPrice = getTotalPrice(this.items);
    this.totalItems = getTotalItems(this.items);
  }
}
