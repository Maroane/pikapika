import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CardsListComponent } from './cards-list.component';

describe('CardsListComponent', () => {
  let component: CardsListComponent;
  let fixture: ComponentFixture<CardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsListComponent, CardThumbnailStubComponent, LoaderStubComponent, CardsListFiltersStubComponent],
      imports: [HttpClientModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule],
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
      component.filtersDisplayed = false;
      fixture.detectChanges();
      const cardsListElem: HTMLElement = fixture.nativeElement;
      const filterDisplayer = cardsListElem.querySelector('.filters-displayer');
      const expectedFilterDisplayer = 'Show filters';
      expect(filterDisplayer.textContent).toContain(expectedFilterDisplayer);

      const filters = cardsListElem.querySelector('.filters');
      expect(filters).toBeNull();
    });
  });
});

@Component({
  selector: 'app-card-thumbnail',
  template: '',
})
class CardThumbnailStubComponent {
  @Input()
  card;
}

@Component({
  selector: 'app-cards-list-filters',
  template: '',
})
class CardsListFiltersStubComponent {
  @Input()
  filters;
}

@Component({
  selector: 'app-loader',
  template: '',
})
class LoaderStubComponent {}
