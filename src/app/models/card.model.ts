import { Ability } from './ability.model';
import { DamageMultiplier } from './damage-multiplier.model';
import { Attack } from './attack.model';

export class Card {
  id: string;
  name: string;
  nationalPokedexNumber?: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types?: string[];
  supertype: string;
  subtype?: string;
  evolvesFrom?: string;
  hp?: string;
  retreatCost?: string[];
  number: number;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  attacks?: Attack[];
  ability?: Ability;
  weaknesses?: DamageMultiplier[];
  resistances?: DamageMultiplier[];
  text?: string;
  price: number;
}
