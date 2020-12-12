import { selectCart } from 'src/app/store/selectors';
import { AppState } from '../../../../../store/state';
import { CartItem } from '../../../../../models/cart-item.model';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getTotalItems, getTotalPrice } from '../../../utils/cart.utils';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
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
