import { CartItem } from 'src/app/models/cart-item.model';
import { Card } from './../../../../models/card.model';
import { AppState } from './../../../../store/state';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardThumbnailComponent } from './card-thumbnail.component';

describe('CardThumbnailComponent', () => {
  let component: CardThumbnailComponent;
  let fixture: ComponentFixture<CardThumbnailComponent>;
  const expectedCard: Card = {
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

  const cartItem = new CartItem(expectedCard);

  let store: MockStore;

  const initialState = {
    appstate: {
      cart: [],
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardThumbnailComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardThumbnailComponent);
    component = fixture.componentInstance;
    component.card = expectedCard;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Elements display', () => {
    it('should show only the add to cart button when item is undefined', () => {
      component.item = undefined;
      fixture.detectChanges();
      const cardViewElem: HTMLElement = fixture.nativeElement;
      const addButton = cardViewElem.querySelector('.actions .button');
      const counter = cardViewElem.querySelector('.counter');
      expect(counter).toBeNull();
      expect(addButton).not.toBeNull();
    });

    it('should show only the cart item counter when item is not undefined', () => {
      component.item = cartItem;
      fixture.detectChanges();
      const cardViewElem: HTMLElement = fixture.nativeElement;
      const addButton = cardViewElem.querySelector('.actions .button');
      const counter = cardViewElem.querySelector('.counter');
      expect(counter).not.toBeNull();
      expect(addButton).toBeNull();
    });
  });
});
