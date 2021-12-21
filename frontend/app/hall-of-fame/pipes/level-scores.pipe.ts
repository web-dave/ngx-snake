import { Pipe, PipeTransform } from '@angular/core';
import { ScoreEntry } from '../../core/models/score-entry';

@Pipe({
  name: 'levelScores'
})
export class LevelScoresPipe implements PipeTransform {
  transform(scoreEntries: ScoreEntry[], level: string): ScoreEntry[] {
    return scoreEntries.filter((score: ScoreEntry) => score.level === level);
  }
}
