import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Attack } from '../../../../../models/attack.model';
import { AttackComponent } from './attack.component';

describe('AttackComponent', () => {
  let component: AttackComponent;
  let fixture: ComponentFixture<AttackComponent>;
  const expectedAttack: Attack = { name: 'attack', text: 'text', cost: ['Colorless', 'Fire'], convertedEnergyCost: 2, damage: '40' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttackComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackComponent);
    component = fixture.componentInstance;
    component.attack = expectedAttack;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
