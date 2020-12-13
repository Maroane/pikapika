import { Store } from '@ngrx/store';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { getBudget } from './../../../../../store/selectors';
import { CartItem } from 'src/app/models/cart-item.model';
import * as StoreActions from 'src/app/store/actions';
import { getTotalItems, getTotalPrice } from '../../../utils/cart.utils';

@Component({
  selector: 'app-cart-budget-header',
  templateUrl: './cart-budget-header.component.html',
  styleUrls: ['./cart-budget-header.component.scss'],
})
export class CartBudgetHeaderComponent implements OnInit {
  @Input()
  public cart: CartItem[];
  public totalPrice: number = 0;
  public totalItems: number = 0;

  public budget$: Observable<number>;
  public budget: number = 0;

  public totalClose: boolean = false;
  public totalAbove: boolean = false;

  constructor(private store: Store) {
    this.budget$ = this.store.select(getBudget);
    this.budget$
      .pipe(
        map((budget) => {
          this.budget = budget;
          this.totalClose = this.isTotalPriceCloseToBudget();
          this.totalAbove = this.isTotalPriceAboveBudget();
        })
      )
      .subscribe();
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cart) {
      this.totalPrice = getTotalPrice(this.cart);
      this.totalItems = getTotalItems(this.cart);
      this.totalClose = this.isTotalPriceCloseToBudget();
      this.totalAbove = this.isTotalPriceAboveBudget();
    }
  }

  public updateBudget(budget: number): void {
    this.store.dispatch(new StoreActions.UpdateBudgetAction({ budget: budget }));
  }

  public handleChange(event): void {
    const value: number = event.target.value;
    if (value && value >= 0) {
      this.updateBudget(+value);
    } else {
      this.updateBudget(0);
    }
  }

  private isTotalPriceAboveBudget(): boolean {
    if (this.budget == 0) return false;
    return this.totalPrice > this.budget;
  }

  private isTotalPriceCloseToBudget(): boolean {
    if (this.budget == 0) return false;
    return this.totalPrice <= this.budget && this.totalPrice >= this.budget * 0.9;
  }
}
