import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Card } from 'src/app/models/card.model';
import { PokemonCardsService } from './pokemon-cards.service';

describe('PokemonCardsService', () => {
  let service: PokemonCardsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(PokemonCardsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('GetAllCards()', () => {
    it('should return the expected cards', () => {
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
        supertype: 'Pokémon',
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
        supertype: 'Pokémon',
        artist: 'artist',
        price: 7,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        hp: '70',
        setCode: 'setCode',
        number: 1,
      };

      const expectedCards: Card[] = [expectedCard_a, expectedCard_b];

      service.getAllCards().subscribe((resp) => {
        expect(resp.body.cards).toEqual(expectedCards);
      });

      const req = httpTestingController.expectOne(service['pokemonAPIUrl'] + service['cardsResource'] + '?pageSize=30&page=1');
      expect(req.request.method).toEqual('GET');

      req.flush({
        cards: [card_a, card_b],
      });
    });
  });

  describe('GetOneCard()', () => {
    it('should return the expected card', () => {
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
        supertype: 'Pokémon',
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
        supertype: 'Pokémon',
        artist: 'artist',
        price: 7,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        hp: '70',
        setCode: 'setCode',
        number: 1,
      };

      service.getOneCard(card_a.id).subscribe((data) => {
        expect(data.card).toEqual(expectedCard_a);
      });
      const req = httpTestingController.expectOne(service['pokemonAPIUrl'] + service['cardsResource'] + '/' + card_a.id);
      expect(req.request.method).toEqual('GET');
      req.flush({ card: card_a });

      service.getOneCard(card_b.id).subscribe((data) => {
        expect(data.card).toEqual(expectedCard_b);
      });
      const req2 = httpTestingController.expectOne(service['pokemonAPIUrl'] + service['cardsResource'] + '/' + card_b.id);
      expect(req.request.method).toEqual('GET');
      req2.flush({ card: card_b });
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

  describe('assignPrice()', () => {
    it('should set the price correctly', () => {
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
        supertype: 'Pokémon',
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
        supertype: 'Pokémon',
        artist: 'artist',
        price: 7,
        rarity: 'rarity',
        series: 'series',
        set: 'set',
        hp: '70',
        setCode: 'setCode',
        number: 1,
      };

      expect(service['assignPrice'](card_a)).toEqual(expectedCard_a);
      expect(service['assignPrice'](card_b)).toEqual(expectedCard_b);
    });
  });
});
