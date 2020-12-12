import { Card } from 'src/app/models/card.model';
import { CartItem } from 'src/app/models/cart-item.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemFullComponent } from './cart-item-full.component';

describe('CartItemFullComponent', () => {
  let component: CartItemFullComponent;
  let fixture: ComponentFixture<CartItemFullComponent>;
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
      declarations: [CartItemFullComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemFullComponent);
    component = fixture.componentInstance;
    component.cartItem = expectedCartItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
