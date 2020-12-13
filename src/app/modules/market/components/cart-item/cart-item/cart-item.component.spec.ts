import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { Card } from '../../../../../models/card.model';
import { CartItem } from '../../../../../models/cart-item.model';
import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  const card: Card = {
    id: 'testID',
    name: 'test',
    imageUrl: 'https://images.pokemontcg.io/ex8/100.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/ex8/100_hires.png',
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
      declarations: [CartItemComponent, CartItemCounterStubComponent],
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

@Component({
  selector: 'app-cart-item-counter',
  template: '',
})
class CartItemCounterStubComponent {
  @Input()
  cardId: string;
  @Input()
  count: number;
}
