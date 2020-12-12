import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsListComponent } from './cards-list.component';

describe('CardsListComponent', () => {
  let component: CardsListComponent;
  let fixture: ComponentFixture<CardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsListComponent],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleHoloChange()', () => {
    it('should call getCardsWithSubscribe() with good params', () => {
      const getCardsWithSubscribe = spyOn(component, 'getCardsWithSubscribe').and.returnValue();
      component.handleHoloChange({ checked: true });
      const expectedParams = { page: 1, rarity: 'Rare Holo|Rare Holo V|Rare Holo VMAX|Rare Holo Lv.X|Rare Holo EX' };
      expect(getCardsWithSubscribe).toHaveBeenCalledWith(expectedParams);

      component.handleHoloChange({ checked: false });
      const expectedParams2 = { page: 1, rarity: '' };
      expect(getCardsWithSubscribe).toHaveBeenCalledWith(expectedParams2);
    });
  });

  describe('handleSupertypeChange()', () => {
    it('should call getCardsWithSubscribe() with good params', () => {
      const getCardsWithSubscribe = spyOn(component, 'getCardsWithSubscribe').and.returnValue();
      component.handleSuperTypeChange({ value: 'value' });
      const expectedParams = { page: 1, supertype: 'value' };
      expect(getCardsWithSubscribe).toHaveBeenCalledWith(expectedParams);
    });
  });

  describe('Elements display', () => {
    it('should display right filter displayer and filters when filterDisplayed', () => {
      component.filtersDisplayed = true;
      fixture.detectChanges();
      const cardsListElem: HTMLElement = fixture.nativeElement;
      const filterDisplayer = cardsListElem.querySelector('.filters-displayer');
      const expectedFilterDisplayer = 'Hide filters';
      expect(filterDisplayer.textContent).toContain(expectedFilterDisplayer);
      const filters = cardsListElem.querySelector('.filters');
      expect(filters).not.toBeNull();
    });

    it('should display right filter displayer and no filters when !filterDisplayed', () => {
      const cardsListElem: HTMLElement = fixture.nativeElement;
      const filterDisplayer = cardsListElem.querySelector('.filters-displayer');
      const expectedFilterDisplayer = 'Show filters';
      expect(filterDisplayer.textContent).toContain(expectedFilterDisplayer);
      const filters = cardsListElem.querySelector('.filters');
      expect(filters).toBeNull();
    });
  });
});
