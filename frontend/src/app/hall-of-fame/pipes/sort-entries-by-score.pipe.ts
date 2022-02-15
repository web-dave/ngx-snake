import { Pipe, PipeTransform } from '@angular/core';
import { ScoreEntryDto } from '../../api/models/score-entry-dto';

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc'
}

@Pipe({
  name: 'sortEntriesByScore'
})
export class SortEntriesByScorePipe implements PipeTransform {
  transform(scoreEntries: ScoreEntryDto[], direction: SortDirection): ScoreEntryDto[] {
    return direction === SortDirection.DESC ?
      scoreEntries.sort((scoreOne: ScoreEntryDto, scoreTwo: ScoreEntryDto) => scoreOne.score > scoreTwo.score ? -1 : 1) :
      scoreEntries.sort((scoreOne: ScoreEntryDto, scoreTwo: ScoreEntryDto) => scoreOne.score < scoreTwo.score ? -1 : 1);
  }
}
