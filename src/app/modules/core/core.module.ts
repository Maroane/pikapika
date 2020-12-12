import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, CoreRoutingModule, HttpClientModule],
  providers: [],
})
export class CoreModule {}
