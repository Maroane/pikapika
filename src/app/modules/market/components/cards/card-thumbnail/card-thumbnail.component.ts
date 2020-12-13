import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { getCart } from 'src/app/store/selectors';
import { CartItem } from '../../../../../models/cart-item.model';
import { Card } from '../../../../../models/card.model';
import * as StoreActions from 'src/app/store/actions';

@Component({
  selector: 'app-card-thumbnail',
  templateUrl: './card-thumbnail.component.html',
  styleUrls: ['./card-thumbnail.component.scss'],
})
export class CardThumbnailComponent implements OnInit, OnDestroy {
  @Input()
  public card: any;

  private items$: Observable<CartItem[]>;
  private cartSub: Subscription;
  public item: CartItem = undefined;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.items$ = this.store.select(getCart);
    this.cartSub = this.items$.subscribe((cart) => {
      this.item = cart.find((cartItem) => {
        return this.card.id === cartItem.item.id;
      });
    });
  }

  ngOnDestroy(): void {
    this.cartSub.unsubscribe();
  }

  public handleAddToCart(card: Card): void {
    this.store.dispatch(new StoreActions.AddToCartAction({ card: card }));
  }
}
