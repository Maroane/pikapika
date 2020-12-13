import { Component, Input, OnInit } from '@angular/core';

import { Ability } from '../../../../../models/ability.model';

@Component({
  selector: 'app-ability',
  templateUrl: './ability.component.html',
  styleUrls: ['./ability.component.scss'],
})
export class AbilityComponent implements OnInit {
  @Input()
  public ability: Ability;

  constructor() {}

  ngOnInit(): void {}
}
