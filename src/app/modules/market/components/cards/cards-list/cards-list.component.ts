import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { debounceTime, finalize, mergeMap } from 'rxjs/operators';
import { Subscription, Observable, fromEvent } from 'rxjs';

import { Card } from '../../../../../models/card.model';
import { PokemonCardsService } from 'src/app/modules/core/services/pokemon-cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit, AfterViewInit, OnDestroy {
  public filtersDisplayed = true;

  public cards$: Observable<Card[]>;

  public totalCount$: Observable<number>;
  public filters$: Observable<any>;

  public loading = true;

  private subArray: Subscription[] = [];

  @ViewChild('searchBar')
  searchBar: ElementRef;

  constructor(private cardService: PokemonCardsService) {}

  ngOnInit(): void {
    this.getCardsWithSubscribe();
    this.cards$ = this.cardService.cards$;
    this.totalCount$ = this.cardService.totalCount$;
    this.filters$ = this.cardService.filters$;
  }

  ngAfterViewInit(): void {
    const sub = fromEvent(this.searchBar.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        mergeMap(() => {
          return this.handleSearchChange();
        })
      )
      .subscribe();

    this.subArray.push(sub);
  }

  ngOnDestroy(): void {
    this.subArray.map((sub) => {
      sub.unsubscribe();
    });
  }

  public toggleFiltersDisplay(): void {
    this.filtersDisplayed = !this.filtersDisplayed;
  }

  private handleSearchChange(): Observable<any> {
    const params = {
      name: this.searchBar.nativeElement.value,
      page: 1,
    };
    return this.getCards(params);
  }

  public handlePageChange(event): void {
    const params = {
      page: event.pageIndex + 1,
    };
    this.getCardsWithSubscribe(params);
  }

  private getCards(params?: any) {
    this.loading = true;
    return this.cardService.getAllCards(params).pipe(finalize(() => (this.loading = false)));
  }

  public getCardsWithSubscribe(params?: any) {
    this.getCards(params).subscribe();
  }

  public setLoading(bool: boolean): void {
    this.loading = bool;
  }
}
