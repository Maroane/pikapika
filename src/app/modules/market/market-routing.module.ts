import { MarketTemplateComponent } from './components/market-template/market-template.component';
import { CartValidationComponent } from './components/cart/cart-validation/cart-validation.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { MarketComponent } from './market.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const marketRoutes: Routes = [
  {
    path: '',
    redirectTo: 'cards',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MarketComponent,
    children: [
      {
        path: '',
        component: MarketTemplateComponent,
        children: [
          {
            path: 'cards',
            component: CardsListComponent,
          },
          {
            path: 'cards/:id',
            component: CardViewComponent,
          },
        ],
      },
      {
        path: 'cart',
        component: CartValidationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(marketRoutes)],
  exports: [RouterModule],
})
export class MarketRoutingModule {}
