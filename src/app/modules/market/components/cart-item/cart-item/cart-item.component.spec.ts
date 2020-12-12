import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Card } from '../../../../../models/card.model';
import { CartItem } from '../../../../../models/cart-item.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  const card: Card = {
    id: 'testID',
    name: 'test',
    imageUrl: 'url',
    imageUrlHiRes: 'urlHiRes',
    supertype: 'supertype',
    artist: 'artist',
    price: 1,
    rarity: 'rarity',
    series: 'series',
    set: 'set',
    setCode: 'setCode',
    number: 1,
  };
  const expectedCartItem: CartItem = new CartItem(card);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    component.cartItem = expectedCartItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
