import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'snake-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss']
})
export class UiCardComponent implements OnInit {

  @Input()
  cardTitle = '';

  @Input()
  cardSubtitle?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
