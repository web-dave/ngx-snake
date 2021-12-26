import { Component, Input } from '@angular/core';
import { ScoreEntry } from '../../core/models/score-entry';

@Component({
  selector: 'snake-hall-of-fame-table',
  templateUrl: './hall-of-fame-table.component.html',
  styleUrls: ['./hall-of-fame-table.component.scss']
})
export class HallOfFameTableComponent {

  @Input()
  scoreEntries: ScoreEntry[] = [];

  displayedColumns: string[] = ['username', 'score', 'date'];

}
