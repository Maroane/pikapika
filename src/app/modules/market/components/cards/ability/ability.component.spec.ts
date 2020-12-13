import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ability } from '../../../../../models/ability.model';
import { AbilityComponent } from './ability.component';

describe('AbilityComponent', () => {
  let component: AbilityComponent;
  let fixture: ComponentFixture<AbilityComponent>;
  const expectedAbility: Ability = { name: 'ability', text: 'text', type: 'type' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbilityComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilityComponent);
    component = fixture.componentInstance;
    component.ability = expectedAbility;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
