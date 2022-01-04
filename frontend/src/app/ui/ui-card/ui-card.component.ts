import { Component, Input } from '@angular/core';

@Component({
  selector: 'snake-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss']
})
export class UiCardComponent {

  @Input()
  cardTitle = '';

  @Input()
  cardSubtitle?: string;

  constructor() {}

}
