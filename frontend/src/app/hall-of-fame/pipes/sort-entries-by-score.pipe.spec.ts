import { ScoreMocks } from '../mocks/score-mocks';
import { SortDirection, SortEntriesByScorePipe } from './sort-entries-by-score.pipe';

describe('SortEntriesByScorePipe', () => {
  let pipe: SortEntriesByScorePipe;

  beforeEach(() => {
    pipe = new SortEntriesByScorePipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should sort all values DESC', () => {
    expect(pipe.transform(ScoreMocks, SortDirection.DESC)).toEqual(pipe.transform(ScoreMocks, SortDirection.DESC))
  });

  it('should sort all values ASC', () => {
    expect(pipe.transform(ScoreMocks, SortDirection.ASC)).toEqual(pipe.transform(ScoreMocks, SortDirection.ASC))
  });
});
