import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'market',
        loadChildren: () => import('./modules/market/market.module').then((m) => m.MarketModule),
      },
      {
        path: '',
        redirectTo: 'market',
        pathMatch: 'full',
      },
      {
        path: '**',
        loadChildren: () => import('./modules/core/core.module').then((m) => m.CoreModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
