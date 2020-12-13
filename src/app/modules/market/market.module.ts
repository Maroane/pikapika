import { CardsListFiltersComponent } from './components/cards/cards-list-filters/cards-list-filters.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemFullComponent } from './components/cart-item/cart-item-full/cart-item-full.component';
import { SharedModule } from '../../shared/shared.module';
import { CardsListComponent } from './components/cards/cards-list/cards-list.component';
import { MarketComponent } from './market.component';
import { MarketRoutingModule } from './market-routing.module';
import { CardViewComponent } from './components/cards/card-view/card-view.component';
import { CardThumbnailComponent } from './components/cards/card-thumbnail/card-thumbnail.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item/cart-item.component';
import { CartItemCounterComponent } from './components/cart-item/cart-item-counter/cart-item-counter.component';
import { AttackComponent } from './components/cards/attack/attack.component';
import { AbilityComponent } from './components/cards/ability/ability.component';
import { CartValidationComponent } from './components/cart/cart-validation/cart-validation.component';
import { DialogValidationCartComponent } from './components/cart/dialog-validation-cart/dialog-validation-cart.component';
import { MarketTemplateComponent } from './components/market-template/market-template.component';
import { CartItemReviewComponent } from './components/cart-item/cart-item-review/cart-item-review.component';
import { CartFullComponent } from './components/cart/cart-full/cart-full.component';
import { CartTotalComponent } from './components/cart/cart-total/cart-total.component';
import { CartBudgetHeaderComponent } from './components/cart/cart-budget-header/cart-budget-header.component';

@NgModule({
  declarations: [
    MarketComponent,
    CardViewComponent,
    CardThumbnailComponent,
    CartComponent,
    CartItemComponent,
    CartItemCounterComponent,
    CardsListComponent,
    AttackComponent,
    AbilityComponent,
    CartValidationComponent,
    DialogValidationCartComponent,
    MarketTemplateComponent,
    CartItemFullComponent,
    CartItemReviewComponent,
    CartFullComponent,
    CartTotalComponent,
    CartBudgetHeaderComponent,
    CardsListFiltersComponent,
  ],
  imports: [CommonModule, MarketRoutingModule, SharedModule],
  providers: [],
})
export class MarketModule {}
