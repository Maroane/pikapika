import { Component, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { of, Observable } from 'rxjs';

import { CartItem } from 'src/app/models/cart-item.model';
import { Attack } from '../../../../../models/attack.model';
import { Ability } from '../../../../../models/ability.model';
import { CardViewComponent } from './card-view.component';
import { Card } from 'src/app/models/card.model';

describe('CardViewComponent', () => {
  let component: CardViewComponent;
  let fixture: ComponentFixture<CardViewComponent>;
  let store: MockStore;

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

  const card$: Observable<Card> = of(card);

  const cartItem = new CartItem(card);

  const initialState = {
    appstate: {
      cart: [],
      budget: 0,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardViewComponent, AttackStubComponent, AbilityStubComponent, CartItemCounterStubComponent, LoaderStubComponent],
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

@Component({
  selector: 'app-attack',
  template: '',
})
class AttackStubComponent {
  @Input()
  attack: Attack;
}

@Component({
  selector: 'app-ability',
  template: '',
})
class AbilityStubComponent {
  @Input()
  ability: Ability;
}

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

@Component({
  selector: 'app-loader',
  template: '',
})
class LoaderStubComponent {}
