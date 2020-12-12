import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogValidationCartComponent } from './dialog-validation-cart.component';

describe('DialogValidationCartComponent', () => {
  let component: DialogValidationCartComponent;
  let fixture: ComponentFixture<DialogValidationCartComponent>;
  let store: MockStore;

  const initialState = {
    appstate: {
      cart: [],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogValidationCartComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogValidationCartComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
