import { TestBed } from '@angular/core/testing';
import { HallOfFameService } from '../services/hall-of-fame.service';

import { HallOfFameResolver } from './hall-of-fame.resolver';

describe('HallOfFameResolver', () => {
  let resolver: HallOfFameResolver;
  let hallOfFameService: HallOfFameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HallOfFameResolver);
    hallOfFameService = TestBed.inject(HallOfFameService);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should call getScores Methode and return true as resolve result', () => {
    const spy = jest.spyOn(hallOfFameService, 'getScores');
    const result = resolver.resolve();
    expect(result).toEqual(true);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(hallOfFameService.isLoaded).toBe(true);
  });
});
