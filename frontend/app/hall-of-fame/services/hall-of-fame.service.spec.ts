import { TestBed } from '@angular/core/testing';

import { HallOfFameService } from './hall-of-fame.service';

describe('HallOfFameService', () => {
  let service: HallOfFameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HallOfFameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
