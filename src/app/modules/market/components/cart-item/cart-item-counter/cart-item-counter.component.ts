import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';

import * as StoreActions from 'src/app/store/actions';

@Component({
  selector: 'app-cart-item-counter',
  templateUrl: './cart-item-counter.component.html',
  styleUrls: ['./cart-item-counter.component.scss'],
})
export class CartItemCounterComponent implements OnInit, OnChanges {
  @Input()
  public cardId: string;

  @Input()
  public count: number;

  public inputCount: number;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count']) {
      this.inputCount = changes['count'].currentValue;
    }
  }

  public updateCounter(newCount: number): void {
    if (newCount <= 0) {
      this.store.dispatch(new StoreActions.RemoveFromCartAction({ cardId: this.cardId }));
    } else {
      this.store.dispatch(new StoreActions.UdpateCartItemCountAction({ cardId: this.cardId, count: newCount }));
    }
  }

  public handleChange(event): void {
    const value: number = event.target.value;
    if (value) {
      this.updateCounter(+value);
    } else {
      this.updateCounter(1);
    }
  }
}
