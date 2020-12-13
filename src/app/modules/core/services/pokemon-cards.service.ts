import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Card } from './../../../models/card.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonCardsService {
  private pokemonAPIUrl = environment.POKEMON_API_BASE_URL + environment.POKEMON_API_VERSION;

  private cardsResource: string = '/cards';

  private _cards$ = new BehaviorSubject<Card[]>([]);
  private _totalCount$ = new BehaviorSubject<number>(0);
  private _filters$ = new BehaviorSubject<any>({
    pageSize: '30',
    page: '1',
  });

  private _card$ = new BehaviorSubject<Card>(null);

  constructor(private http: HttpClient) {}

  public getAllCards(params?: any): Observable<any> {
    this.setAllCardsFilter(params);

    return this.http.get(this.pokemonAPIUrl + this.cardsResource, { params: this._filters$.value, observe: 'response' }).pipe(
      map((resp: any) => {
        resp.body.cards = resp.body.cards.map((card) => {
          return this.assignPrice(card);
        });
        return resp;
      }),
      tap((resp) => {
        this._cards$.next(resp.body.cards);
        this._totalCount$.next(resp.headers.get('total-count'));

        // It ensures that the returned page size match what we show on screen,
        // not what we asked for, if the API returns a different value for this param.
        const respFilters = this._filters$.value;
        respFilters.pageSize = resp.headers.get('page-size');
        this._filters$.next(respFilters);
      })
    );
  }

  public getOneCard(id: string): Observable<any> {
    return this.http.get(this.pokemonAPIUrl + this.cardsResource + '/' + id).pipe(
      map((data: any) => {
        return { card: this.assignPrice(data.card) };
      }),
      tap((data) => {
        this._card$.next(data.card);
      })
    );
  }

  public setAllCardsFilter(params?: any) {
    const { name, rarity, supertype, types, subtype, page, pageSize } = params || {};

    const filters = this._filters$.value;

    // It clears filters.name if name == '',
    // It leaves as it is if name is undefined
    if (name !== undefined) {
      if (name !== '') {
        filters.name = name;
      } else {
        delete filters.name;
      }
    }

    // It clears filters.rarity if rarity == '',
    // It leaves as it is if rarity is undefined
    if (rarity !== undefined) {
      if (rarity !== '') {
        filters.rarity = rarity;
      } else {
        delete filters.rarity;
      }
    }

    // It clears filters.supertype if supertype === null,
    // It leaves as it is if supertype is undefined
    if (supertype !== undefined) {
      if (supertype !== null) {
        filters.supertype = supertype;
      } else {
        delete filters.supertype;
      }
    }

    // It clears filters.supertype if supertype === null,
    // It leaves as it is if supertype is undefined
    if (subtype !== undefined) {
      if (subtype !== null) {
        filters.subtype = subtype;
      } else {
        delete filters.subtype;
      }
    }

    // It clears filters.types if types === null,
    // It leaves as it is if types is undefined
    if (types !== undefined) {
      if (types !== null) {
        filters.types = types;
      } else {
        delete filters.types;
      }
    }

    // These filters are always sent, no need to delete them
    if (page) filters.page = page.toString();
    if (pageSize) filters.pageSize = pageSize.toString();

    this._filters$.next(filters);
  }

  private assignPrice(card: any): Card {
    if (card.supertype === 'Pokémon') {
      card.price = card.hp / 10;
    } else {
      card.price = 15;
    }
    return card;
  }

  // --------------------- GETTERS -------------------- //

  get card$(): Observable<Card> {
    return this._card$.asObservable();
  }

  get cards$(): Observable<Card[]> {
    return this._cards$.asObservable();
  }

  get filters$(): Observable<number> {
    return this._filters$.asObservable();
  }

  get totalCount$(): Observable<number> {
    return this._totalCount$.asObservable();
  }
}
