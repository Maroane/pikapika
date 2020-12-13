import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { DialogValidationCartComponent } from '../dialog-validation-cart/dialog-validation-cart.component';
import { getCart } from 'src/app/store/selectors';
import { AppState } from '../../../../../store/state';
import { CartItem } from '../../../../../models/cart-item.model';
import * as StoreActions from '../../../../../store/actions';

@Component({
  selector: 'app-cart-validation',
  templateUrl: './cart-validation.component.html',
  styleUrls: ['./cart-validation.component.scss'],
})
export class CartValidationComponent implements OnInit {
  public items$: Observable<CartItem[]>;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    this.items$ = store.select(getCart);
  }

  ngOnInit(): void {}

  public openValidationDialog() {
    const dialogRef = this.dialog.open(DialogValidationCartComponent, {
      data: {
        items$: this.items$,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.clearCart();
    });
  }

  public clearCart() {
    this.store.dispatch(new StoreActions.ClearCartAction());
  }
}
