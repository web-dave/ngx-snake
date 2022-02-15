import { Component, Input } from '@angular/core';
import { ScoreEntryDto } from '../../api/models/score-entry-dto';

@Component({
  selector: 'snake-hall-of-fame-table',
  templateUrl: './hall-of-fame-table.component.html',
  styleUrls: ['./hall-of-fame-table.component.scss']
})
export class HallOfFameTableComponent {

  @Input()
  scoreEntries: ScoreEntryDto[] = [];

  displayedColumns: string[] = ['username', 'score', 'date'];

}
