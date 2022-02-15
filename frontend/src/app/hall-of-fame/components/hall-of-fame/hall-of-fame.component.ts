import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScoreEntryDto } from '../../../api/models/score-entry-dto';
import { HallOfFameService } from '../../../api/services/hall-of-fame.service';
import { SortDirection } from '../../pipes/sort-entries-by-score.pipe';

@Component({
  selector: 'snake-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameComponent {
  levels: string[] = [];

  sortDirection = SortDirection;

  scores$: Observable<ScoreEntryDto[]> = this.hallOfFameService.hallOfFameControllerGetList()
    .pipe(
      map((scores: ScoreEntryDto[]) => {
        this.levels = [...new Set(scores.map((score: ScoreEntryDto) => score.level))];
        return scores;
      })
    );

  constructor(private hallOfFameService: HallOfFameService) {
  }

}
