import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Input } from '@angular/core';

import { CartItem } from './../../../../../models/cart-item.model';
import { SharedModule } from './../../../../../shared/shared.module';
import { DialogValidationCartComponent } from './dialog-validation-cart.component';

describe('DialogValidationCartComponent', () => {
  let component: DialogValidationCartComponent;
  let fixture: ComponentFixture<DialogValidationCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogValidationCartComponent, CartTotalStubComponent, CartItemReviewStubComponent],
      imports: [SharedModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: { data: {} } }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogValidationCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'app-cart-total',
  template: '',
})
class CartTotalStubComponent {
  @Input()
  items: CartItem[];
}

@Component({
  selector: 'app-cart-item-review',
  template: '',
})
class CartItemReviewStubComponent {
  @Input()
  cartItem: CartItem;
}
