import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListFiltersComponent } from './cards-list-filters.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

describe('CardsListFiltersComponent', () => {
  let component: CardsListFiltersComponent;
  let fixture: ComponentFixture<CardsListFiltersComponent>;
  const filters = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsListFiltersComponent],
      imports: [HttpClientModule, BrowserAnimationsModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsListFiltersComponent);
    component = fixture.componentInstance;
    component.filters = filters;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleHoloChange()', () => {
    it('should call getCards() with rarity not empty string', () => {
      const getCards = spyOn(component, 'getCards').and.returnValue();
      component.handleHoloChange({ checked: true });
      const expectedParams = { page: 1, rarity: 'Rare Holo|Rare Holo V|Rare Holo VMAX|Rare Holo Lv.X|Rare Holo EX' };
      expect(getCards).toHaveBeenCalledWith(expectedParams);
    });

    it("should call getCards() with rarity='' ", () => {
      const getCards = spyOn(component, 'getCards').and.returnValue();
      component.handleHoloChange({ checked: false });
      const expectedParams2 = { page: 1, rarity: '' };
      expect(getCards).toHaveBeenCalledWith(expectedParams2);
    });
  });

  describe('handleSupertypeChange()', () => {
    it('should call getCards() with supertype not null', () => {
      const getCards = spyOn(component, 'getCards').and.returnValue();
      component.handleSuperTypeChange({ value: 'value' });
      const expectedParams = { page: 1, supertype: 'value' };
      expect(getCards).toHaveBeenCalledWith(expectedParams);
    });

    it('should call getCards() with supertype null', () => {
      const getCards = spyOn(component, 'getCards').and.returnValue();
      component.handleSuperTypeChange({ value: undefined });
      const expectedParams2 = { page: 1, supertype: null };
      expect(getCards).toHaveBeenCalledWith(expectedParams2);
    });
  });

  describe('handleTypesChange()', () => {
    it('should call getCards() with types not null and good format', () => {
      const getCards = spyOn(component, 'getCards').and.returnValue();
      component.handleTypesChange({ value: ['value1', 'value2'] });
      const expectedParams = { page: 1, types: 'value1,value2,' };
      expect(getCards).toHaveBeenCalledWith(expectedParams);
    });

    it('should call getCards() with types null', () => {
      const getCards = spyOn(component, 'getCards').and.returnValue();
      component.handleTypesChange({ value: [] });
      const expectedParams2 = { page: 1, types: null };
      expect(getCards).toHaveBeenCalledWith(expectedParams2);
    });
  });

  describe('handleSubtypeChange()', () => {
    it('should call getCards() with subtype not null', () => {
      const getCards = spyOn(component, 'getCards').and.returnValue();
      component.handleSubTypeChange({ value: 'value' });
      const expectedParams = { page: 1, subtype: 'value' };
      expect(getCards).toHaveBeenCalledWith(expectedParams);
    });

    it('should call getCards() with subtype null', () => {
      const getCards = spyOn(component, 'getCards').and.returnValue();
      component.handleSubTypeChange({ value: undefined });
      const expectedParams2 = { page: 1, subtype: null };
      expect(getCards).toHaveBeenCalledWith(expectedParams2);
    });
  });
});
