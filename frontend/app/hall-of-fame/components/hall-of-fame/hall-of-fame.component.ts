import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ScoreEntry } from '../../../core/models/score-entry';
import { SortDirection } from '../../pipes/sort-entries-by-score.pipe';
import { HallOfFameService } from '../../services/hall-of-fame.service';

@Component({
  selector: 'snake-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameComponent implements OnInit {
  levels: string[] = [];

  sortDirection = SortDirection;

  scores$: Observable<ScoreEntry[]> = this.hallOfFameService.gameScores$
    .pipe(
      map((scores: ScoreEntry[]) => {
        this.levels = [...new Set(scores.map((score: ScoreEntry) => score.level))];
        return scores;
      })
    );

  constructor(private hallOfFameService: HallOfFameService) { }

  ngOnInit(): void {
  }
}
