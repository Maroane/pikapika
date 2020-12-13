import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBudgetHeaderComponent } from './cart-budget-header.component';
import * as StoreActions from 'src/app/store/actions';

describe('CartBudgetHeaderComponent', () => {
  let component: CartBudgetHeaderComponent;
  let fixture: ComponentFixture<CartBudgetHeaderComponent>;

  let store: MockStore;

  const initialState = {
    appstate: {
      cart: [],
      budget: 0,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartBudgetHeaderComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartBudgetHeaderComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('IsTotalPriceAboveBudget()', () => {
    it('should return false if comp.budget is null or undefined', () => {
      component.budget = 0;
      fixture.detectChanges();
      expect(component['isTotalPriceAboveBudget']()).toEqual(false);
    });

    it('should return true if comp.budget is set and budget < comp.totalPrice, false otherwise', () => {
      component.budget = 10;
      component.totalPrice = 15;
      fixture.detectChanges();
      expect(component['isTotalPriceAboveBudget']()).toEqual(true);

      component.budget = 15;
      component.totalPrice = 10;
      fixture.detectChanges();
      expect(component['isTotalPriceAboveBudget']()).toEqual(false);
    });
  });

  describe('IsTotalPriceCloseToBudget()', () => {
    it('should return false if comp.budget is null or undefined', () => {
      component.budget = 0;
      fixture.detectChanges();
      expect(component['isTotalPriceAboveBudget']()).toEqual(false);
    });

    it('should return true if comp.budget is set and (90% budget) <= comp.totalPrice and budget >= totalPrice, false otherwise', () => {
      component.budget = 10;
      component.totalPrice = 9;
      fixture.detectChanges();
      expect(component['isTotalPriceCloseToBudget']()).toEqual(true);

      component.budget = 10;
      component.totalPrice = 11;
      fixture.detectChanges();
      expect(component['isTotalPriceCloseToBudget']()).toEqual(false);

      component.budget = 10;
      component.totalPrice = 8;
      fixture.detectChanges();
      expect(component['isTotalPriceCloseToBudget']()).toEqual(false);
    });
  });

  describe('handleChange()', () => {
    it('should dispatch UpdateBudgetStoreActions with budget = value if value > 0', () => {
      const dispatch = spyOn(store, 'dispatch').and.returnValue();

      component.handleChange({ target: { value: 13 } });
      const expectecAction = new StoreActions.UpdateBudgetAction({ budget: 13 });
      expect(dispatch).toHaveBeenCalledWith(expectecAction);
    });

    it('should dispatch UpdateBudgetStoreActions with budget = 0 if value is null', () => {
      const dispatch = spyOn(store, 'dispatch').and.returnValue();

      component.handleChange({ target: { value: null } });
      const expectecAction = new StoreActions.UpdateBudgetAction({ budget: 0 });
      expect(dispatch).toHaveBeenCalledWith(expectecAction);
    });

    it('should dispatch UpdateBudgetStoreActions with budget = 0 if value is undefined', () => {
      const dispatch = spyOn(store, 'dispatch').and.returnValue();

      component.handleChange({ target: { value: undefined } });
      const expectecAction = new StoreActions.UpdateBudgetAction({ budget: 0 });
      expect(dispatch).toHaveBeenCalledWith(expectecAction);
    });

    it('should dispatch UpdateBudgetStoreActions with budget = 0 if value < 0', () => {
      const dispatch = spyOn(store, 'dispatch').and.returnValue();

      component.handleChange({ target: { value: -1 } });
      const expectecAction = new StoreActions.UpdateBudgetAction({ budget: 0 });
      expect(dispatch).toHaveBeenCalledWith(expectecAction);
    });
  });
});
