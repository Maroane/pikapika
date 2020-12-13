import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CartItem } from './../../../../models/cart-item.model';
import { MarketTemplateComponent } from './market-template.component';

describe('MarketTemplateComponent', () => {
  let component: MarketTemplateComponent;
  let fixture: ComponentFixture<MarketTemplateComponent>;

  let store: MockStore;
  const initialState = {
    appstate: {
      cart: [],
      budget: 0,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketTemplateComponent, CartStubComponent, RouterOutletStubComponent],
      imports: [RouterTestingModule],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketTemplateComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-cart',
  template: '',
})
class CartStubComponent {
  @Input()
  cart: CartItem[];
}

@Component({ selector: 'router-outlet', template: '' })
class RouterOutletStubComponent {}
