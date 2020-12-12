import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const coreRoutes: Routes = [
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
