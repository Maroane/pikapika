import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item.model';
import { selectCart } from 'src/app/store/selectors';
import { AppState } from 'src/app/store/state';

@Component({
  selector: 'app-market-template',
  templateUrl: './market-template.component.html',
  styleUrls: ['./market-template.component.scss'],
})
export class MarketTemplateComponent implements OnInit {
  ngOnInit(): void {}

  public items$: Observable<CartItem[]>;

  constructor(private store: Store<AppState>) {
    this.items$ = store.select(selectCart);
  }
}
