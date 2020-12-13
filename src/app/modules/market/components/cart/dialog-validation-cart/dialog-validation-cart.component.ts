import { Observable } from 'rxjs';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-dialog-validation-cart',
  templateUrl: './dialog-validation-cart.component.html',
  styleUrls: ['./dialog-validation-cart.component.scss'],
})
export class DialogValidationCartComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogValidationCartData) {}
}

export interface DialogValidationCartData {
  items$: Observable<CartItem[]>;
}
