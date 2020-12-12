import { CartItem } from 'src/app/models/cart-item.model';
import { of, Observable } from 'rxjs';
import { initialState, AppState } from './../../../../store/state';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CardViewComponent } from './card-view.component';
import { HttpClientModule } from '@angular/common/http';
import { Card } from 'src/app/models/card.model';

describe('CardViewComponent', () => {
  let component: CardViewComponent;
  let fixture: ComponentFixture<CardViewComponent>;
  let store: MockStore;

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

  const card$: Observable<Card> = of(card);

  const cartItem = new CartItem(card);

  const initialState = {
    appstate: {
      cart: [],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardViewComponent],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    component.card$ = card$;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Elements display', () => {
    it('should show only the add to cart button when item is undefined', () => {
      component.loading = false;
      component.item = undefined;
      fixture.detectChanges();
      const cardViewElem: HTMLElement = fixture.nativeElement;
      const addButton = cardViewElem.querySelector('.actions button');
      const counter = cardViewElem.querySelector('.counter');
      expect(counter).toBeNull();
      expect(addButton).not.toBeNull();
    });

    it('should show only the cart item counter when item is not undefined', () => {
      component.loading = false;
      component.item = cartItem;
      fixture.detectChanges();
      const cardViewElem: HTMLElement = fixture.nativeElement;
      const addButton = cardViewElem.querySelector('.actions button');
      const counter = cardViewElem.querySelector('.counter');
      expect(counter).not.toBeNull();
      expect(addButton).toBeNull();
    });
  });
});
