import { SharedModule } from '../../../../../shared/shared.module';
import { CartItem } from 'src/app/models/cart-item.model';
import { Card } from '../../../../../models/card.model';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartValidationComponent } from './cart-validation.component';

describe('CartValidationComponent', () => {
  let component: CartValidationComponent;
  let fixture: ComponentFixture<CartValidationComponent>;

  const card_a: Card = {
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

  const card_b: Card = {
    id: 'testID',
    name: 'test',
    imageUrl: 'url',
    imageUrlHiRes: 'urlHiRes',
    supertype: 'supertype',
    artist: 'artist',
    price: 2,
    rarity: 'rarity',
    series: 'series',
    set: 'set',
    setCode: 'setCode',
    number: 1,
  };

  const cartItem_a = new CartItem(card_a);
  const cartItem_b = new CartItem(card_b);
  cartItem_b.count = 3;

  let store: MockStore;

  const initialState = {
    appstate: {
      cart: [cartItem_a, cartItem_b],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartValidationComponent],
      imports: [SharedModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartValidationComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
