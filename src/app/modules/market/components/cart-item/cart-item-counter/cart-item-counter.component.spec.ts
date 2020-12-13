import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { CartItemCounterComponent } from './cart-item-counter.component';
import * as StoreActions from 'src/app/store/actions';

describe('CartItemCounterComponent', () => {
  let component: CartItemCounterComponent;
  let fixture: ComponentFixture<CartItemCounterComponent>;
  const expectedCount: number = 3;
  const expectedCardId: string = 'cardId';

  let store: MockStore;
  const initialState = {
    appstate: {
      cart: [],
      budget: 0,
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartItemCounterComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemCounterComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    component.count = expectedCount;
    component.cardId = expectedCardId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('updateCounter()', () => {
    it('should dispatch RemoveFromCartAction if count <= 0', () => {
      const dispatch = spyOn(store, 'dispatch').and.returnValue();
      component.updateCounter(0);
      const expectecAction = new StoreActions.RemoveFromCartAction({ cardId: expectedCardId });
      expect(dispatch).toHaveBeenCalledWith(expectecAction);

      component.updateCounter(-1);
      const expectecAction2 = new StoreActions.RemoveFromCartAction({ cardId: expectedCardId });
      expect(dispatch).toHaveBeenCalledWith(expectecAction2);
    });

    it('should dispatch Update cart item count if count >= 0', () => {
      const dispatch = spyOn(store, 'dispatch').and.returnValue();
      component.updateCounter(1);
      const expectecAction = new StoreActions.UdpateCartItemCountAction({ cardId: expectedCardId, count: 1 });
      expect(dispatch).toHaveBeenCalledWith(expectecAction);
    });
  });

  describe('handleChange()', () => {
    it('should call updateCounter(1) when value is empty', () => {
      const updateCounter = spyOn(component, 'updateCounter').and.returnValue();
      component.handleChange({ target: { value: '' } });
      const expectedCountParam = 1;
      expect(updateCounter).toHaveBeenCalledWith(expectedCountParam);
    });

    it('should call updateCounter(1) when value is null', () => {
      const updateCounter = spyOn(component, 'updateCounter').and.returnValue();
      component.handleChange({ target: { value: null } });
      const expectedCountParam = 1;
      expect(updateCounter).toHaveBeenCalledWith(expectedCountParam);
    });

    it('should call updateCounter(value) when value is not empty', () => {
      const updateCounter = spyOn(component, 'updateCounter').and.returnValue();
      component.handleChange({ target: { value: '4' } });
      const expectedCountParam = 4;
      expect(updateCounter).toHaveBeenCalledWith(expectedCountParam);
    });
  });
});
