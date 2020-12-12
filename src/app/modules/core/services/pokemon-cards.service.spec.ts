import { of } from 'rxjs';
import { Card } from 'src/app/models/card.model';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PokemonCardsService } from './pokemon-cards.service';

describe('PokemonCardsService', () => {
  let service: PokemonCardsService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonCardsService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GetAllCards()', () => {
    it('should set the price right', () => {
      const card_a: any = {
        id: 'testID_a',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        setCode: 'setCode',
        number: 1,
      };
      const card_b: any = {
        id: 'testID_b',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        hp: '70',
        setCode: 'setCode',
        number: 1,
      };

      const expectedCards: Card[] = [card_a, card_b];

      httpClientSpy.get.and.returnValue(of(card_a));

      service.getAllCards().subscribe((data) => {
        expect(data.cards).toEqual(expectedCards);
      });
    });
  });

  describe('GetOneCard()', () => {
    it('should set the price right', () => {
      const card_a: any = {
        id: 'testID_a',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        setCode: 'setCode',
        number: 1,
      };
      const card_b: any = {
        id: 'testID_b',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        hp: '70',
        setCode: 'setCode',
        number: 1,
      };
      const expectedCard_a: Card = {
        id: 'testID_a',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        price: 15,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        setCode: 'setCode',
        number: 1,
      };
      const expectedCard_b: Card = {
        id: 'testID_b',
        name: 'test',
        imageUrl: 'url',
        imageUrlHiRes: 'urlHiRes',
        supertype: 'supertype',
        artist: 'artist',
        price: 7,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        hp: '70',
        setCode: 'setCode',
        number: 1,
      };

      httpClientSpy.get.and.returnValue(of(card_a));

      service.getOneCard('testID_a').subscribe((data) => {
        expect(data.card).toEqual(expectedCard_a);
        expect(data.card).toEqual('brebis');
      });

      httpClientSpy.get.and.returnValue(of(card_b));

      service.getOneCard('testID_b').subscribe((data) => {
        expect(data.card).toEqual(expectedCard_b);
      });
    });
  });

  describe('setAllCardsFilter()', () => {
    it('should set the filters correctly if params are specified', () => {
      const params_a: any = {
        name: 'name',
        page: 2,
        rarity: 'rarity',
      };
      const expectedFilter_a: any = {
        page: '2',
        pageSize: '30',
        name: 'name',
        rarity: 'rarity',
      };

      const params_b: any = {
        rarity: '',
        page: 1,
      };
      const expectedFilter_b: any = {
        page: '1',
        pageSize: '30',
        name: 'name',
      };
      service.setAllCardsFilter(params_a);
      expect(service['_filters$'].value).toEqual(expectedFilter_a);

      service.setAllCardsFilter(params_b);
      expect(service['_filters$'].value).toEqual(expectedFilter_b);
    });

    it('should do nothing if no filters are specified', () => {
      const expectedFilter: any = {
        page: '1',
        pageSize: '30',
      };
      service.setAllCardsFilter();
      expect(service['_filters$'].value).toEqual(expectedFilter);
    });
  });
});
