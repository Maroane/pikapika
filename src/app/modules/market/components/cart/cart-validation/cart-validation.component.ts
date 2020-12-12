import { DialogValidationCartComponent } from '../dialog-validation-cart/dialog-validation-cart.component';
import { selectCart } from 'src/app/store/selectors';
import { AppState } from '../../../../../store/state';
import { CartItem } from '../../../../../models/cart-item.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import * as StoreActions from '../../../../../store/actions';

@Component({
  selector: 'app-cart-validation',
  templateUrl: './cart-validation.component.html',
  styleUrls: ['./cart-validation.component.scss'],
})
export class CartValidationComponent implements OnInit {
  public items$: Observable<CartItem[]>;

  constructor(private store: Store<AppState>, public dialog: MatDialog) {
    this.items$ = store.select(selectCart);
  }

  ngOnInit(): void {}

  public openDialog() {
    const dialogRef = this.dialog.open(DialogValidationCartComponent);

    dialogRef.afterClosed().subscribe(() => {
      this.clearCart();
    });
  }

  public clearCart() {
    this.store.dispatch(new StoreActions.ClearCartAction());
  }
}
