import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItem } from 'src/app/models/cart-item.model';
import { Card } from 'src/app/models/card.model';
import { CartItemReviewComponent } from './cart-item-review.component';

describe('CartItemReviewComponent', () => {
  let component: CartItemReviewComponent;
  let fixture: ComponentFixture<CartItemReviewComponent>;
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
      declarations: [CartItemReviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemReviewComponent);
    component = fixture.componentInstance;
    component.cartItem = expectedCartItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
