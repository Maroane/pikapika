import { map } from 'rxjs/operators';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { selectCart } from 'src/app/store/selectors';
import { AppState } from 'src/app/store/state';
import { getTotalItems, getTotalPrice } from '../../../utils/cart.utils';

@Component({
  selector: 'app-dialog-validation-cart',
  templateUrl: './dialog-validation-cart.component.html',
  styleUrls: ['./dialog-validation-cart.component.scss'],
})
export class DialogValidationCartComponent implements OnInit {
  public items$: Observable<CartItem[]>;

  constructor(private store: Store<AppState>) {
    this.items$ = store.select(selectCart);
  }

  ngOnInit(): void {}
}
