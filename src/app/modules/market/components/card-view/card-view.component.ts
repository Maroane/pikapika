import { selectCart } from 'src/app/store/selectors';
import { combineAll, finalize, take } from 'rxjs/operators';
import { Card } from './../../../../models/card.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonCardsService } from 'src/app/modules/core/services/pokemon-cards.service';
import { Store } from '@ngrx/store';
import * as StoreActions from 'src/app/store/actions';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent implements OnInit, OnDestroy {
  public card$: Observable<Card>;

  public items$: Observable<CartItem[]>;
  public items: CartItem[];
  public item: CartItem = undefined;

  private subArray: Subscription[] = [];

  public loading = true;

  constructor(private route: ActivatedRoute, private cardService: PokemonCardsService, private store: Store) {
    this.card$ = this.cardService.card$;
  }

  ngOnInit(): void {
    this.items$ = this.store.select(selectCart);

    this.route.params.pipe(take(1)).subscribe((params) => {
      const pathId = params['id'];
      if (pathId) {
        this.cardService
          .getOneCard(pathId)
          .pipe(finalize(() => (this.loading = false)))
          .subscribe();

        const cardSub = this.card$.subscribe((card) => {
          if (card != null) {
            const cartSub = this.items$.subscribe((cart) => {
              this.item = cart.find((cartItem) => {
                return card.id === cartItem.item.id;
              });
            });
            this.subArray.push(cartSub);
          }
        });
        this.subArray.push(cardSub);
      }
    });
  }

  ngOnDestroy(): void {
    this.subArray.map((sub) => {
      sub.unsubscribe();
    });
  }

  public handleAddClick(card: Card): void {
    this.store.dispatch(new StoreActions.AddToCartAction({ card: card }));
  }
}
