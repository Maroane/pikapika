import { Component, Input, OnInit } from '@angular/core';
import { getIconsUrlFromTypes } from '../../../utils/types.utils';

import { Attack } from '../../../../../models/attack.model';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss'],
})
export class AttackComponent implements OnInit {
  @Input()
  public attack: Attack;

  public typeIconUrls: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.typeIconUrls = getIconsUrlFromTypes(this.attack.cost);
  }
}
