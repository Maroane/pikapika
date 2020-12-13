import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { finalize, take } from 'rxjs/operators';

import { getCart } from 'src/app/store/selectors';
import { Card } from '../../../../../models/card.model';
import { PokemonCardsService } from 'src/app/modules/core/services/pokemon-cards.service';
import * as StoreActions from 'src/app/store/actions';
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
    this.items$ = this.store.select(getCart);

    this.route.params.pipe(take(1)).subscribe((params) => {
      const pathId = params['id'];
      if (pathId) {
        this.cardService
          .getOneCard(pathId)
          .pipe(finalize(() => (this.loading = false)))
          .subscribe();

        const subCombine = combineLatest([this.items$, this.card$]).subscribe(([items, card]) => {
          if (card) {
            this.item = items.find((cartItem) => {
              return card.id === cartItem.item.id;
            });
          }
        });
        this.subArray.push(subCombine);
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
