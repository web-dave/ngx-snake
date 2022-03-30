import { Pipe, PipeTransform } from '@angular/core';
import { ScoreEntryDto } from '../../api/models/score-entry-dto';

@Pipe({
  name: 'levelScores'
})
export class LevelScoresPipe implements PipeTransform {
  transform(scoreEntries: ScoreEntryDto[], level: string): ScoreEntryDto[] {
    return scoreEntries.filter((score: ScoreEntryDto) => score.level === level);
  }
}
