import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { CartItem } from 'src/app/models/cart-item.model';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartComponent, CartItemStubComponent, CartBudgetHeaderStubComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-cart-item',
  template: '',
})
class CartItemStubComponent {
  @Input()
  cartItem: CartItem;
}

@Component({
  selector: 'app-cart-budget-header',
  template: '',
})
class CartBudgetHeaderStubComponent {
  @Input()
  cart: CartItem[];
}
