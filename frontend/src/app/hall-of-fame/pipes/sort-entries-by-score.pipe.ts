import { Pipe, PipeTransform } from '@angular/core';
import { ScoreEntry } from '../../core/models/score-entry';

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc'
}

@Pipe({
  name: 'sortEntriesByScore'
})
export class SortEntriesByScorePipe implements PipeTransform {
  transform(scoreEntries: ScoreEntry[], direction: SortDirection): ScoreEntry[] {
    return direction === SortDirection.DESC ?
      scoreEntries.sort((scoreOne: ScoreEntry, scoreTwo: ScoreEntry) => scoreOne.score > scoreTwo.score ? -1 : 1) :
      scoreEntries.sort((scoreOne: ScoreEntry, scoreTwo: ScoreEntry) => scoreOne.score < scoreTwo.score ? -1 : 1);
  }
}
