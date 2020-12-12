import { Attack } from './../../../../models/attack.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss'],
})
export class AttackComponent implements OnInit {
  @Input()
  public attack: Attack;

  constructor() {}

  ngOnInit(): void {}
}
