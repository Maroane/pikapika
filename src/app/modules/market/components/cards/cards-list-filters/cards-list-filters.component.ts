import { PokemonCardsService } from '../../../../core/services/pokemon-cards.service';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { getIconUrlFromType } from '../../../utils/types.utils';

@Component({
  selector: 'app-cards-list-filters',
  templateUrl: './cards-list-filters.component.html',
  styleUrls: ['./cards-list-filters.component.scss'],
})
export class CardsListFiltersComponent implements OnInit {
  @Input()
  public filters: any;

  @Output()
  public loadingChange: EventEmitter<boolean> = new EventEmitter();

  public typesFilters: string[];

  public supertypes: string[] = ['Pokémon', 'Trainer', 'Energy'];
  public types: string[] = ['Grass', 'Fire', 'Water', 'Lightning', 'Psychic', 'Fighting', 'Darkness', 'Metal', 'Dragon', 'Fairy', 'Colorless'];

  public typesWithIcons: any[] = [];

  constructor(private cardService: PokemonCardsService) {}

  ngOnInit(): void {
    this.setTypesFilters();
    this.setTypesWithIcons();
  }

  private setTypesWithIcons(): void {
    this.typesWithIcons = this.types.map((type) => {
      const typeWithIcon = {
        type: type,
        iconUrl: getIconUrlFromType(type),
      };
      return typeWithIcon;
    });
  }

  public handleHoloChange(event: any): void {
    const params: any = {
      rarity: '',
      page: 1,
    };
    if (event.checked) {
      params.rarity = 'Rare Holo|Rare Holo V|Rare Holo VMAX|Rare Holo Lv.X|Rare Holo EX';
    }
    this.getCards(params);
  }

  public handleSuperTypeChange(event: any): void {
    const value = event.value === undefined ? null : event.value;
    const params = {
      supertype: value,
      page: 1,
    };
    this.getCards(params);
  }

  public handleTypesChange(event: any): void {
    const values = event.value;
    let paramValue = null;

    if (values.length > 0) {
      paramValue = '';
      values.map((value) => {
        paramValue += value + ',';
      });
    }
    const params = {
      types: paramValue,
      page: 1,
    };
    this.getCards(params);
  }

  public handleSubTypeChange(event: any): void {
    const value = event.value === undefined ? null : event.value;
    const params = {
      subtype: value,
      page: 1,
    };
    this.getCards(params);
  }

  public setTypesFilters(): void {
    if (this.filters.types) {
      this.typesFilters = this.filters.types.split(',').filter((type) => {
        return type != '';
      });
    }
  }

  public getCards(params?: any) {
    this.loadingChange.emit(true);
    this.cardService
      .getAllCards(params)
      .pipe(
        finalize(() => {
          this.loadingChange.emit(false);
        })
      )
      .subscribe();
  }
}
