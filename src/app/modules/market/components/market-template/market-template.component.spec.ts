import { initialState } from '../../../../store/state';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { MarketTemplateComponent } from './market-template.component';

describe('MarketTemplateComponent', () => {
  let component: MarketTemplateComponent;
  let fixture: ComponentFixture<MarketTemplateComponent>;

  let store: MockStore;
  const initialState = {
    appstate: {
      cart: [],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketTemplateComponent],
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
