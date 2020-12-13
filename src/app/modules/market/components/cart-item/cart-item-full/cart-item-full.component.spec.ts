import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { Card } from 'src/app/models/card.model';
import { CartItem } from 'src/app/models/cart-item.model';
import { CartItemFullComponent } from './cart-item-full.component';

describe('CartItemFullComponent', () => {
  let component: CartItemFullComponent;
  let fixture: ComponentFixture<CartItemFullComponent>;
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
      declarations: [CartItemFullComponent, CartItemCounterStubComponent],
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
