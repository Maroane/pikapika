import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItem } from './../../../../../models/cart-item.model';
import { CartFullComponent } from './cart-full.component';

describe('CartFullComponent', () => {
  let component: CartFullComponent;
  let fixture: ComponentFixture<CartFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartFullComponent, CartItemFullStubComponent, CartBudgetHeaderStubComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-cart-item-full',
  template: '',
})
class CartItemFullStubComponent {
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
