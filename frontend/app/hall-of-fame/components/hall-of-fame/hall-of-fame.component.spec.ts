import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ScoreEntry } from '../../../core/models/score-entry';
import { MaterialTestingModule } from '../../../core/testing/material-testing/material-testing.module';
import { ScoreMocks } from '../../mocks/score-mocks';
import { HallOfFameService } from '../../services/hall-of-fame.service';

import { HallOfFameComponent } from './hall-of-fame.component';
import DoneCallback = jest.DoneCallback;

describe('HallOfFameComponent', () => {
  let component: HallOfFameComponent;
  let fixture: ComponentFixture<HallOfFameComponent>;
  let hallOfFameService: HallOfFameService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HallOfFameComponent],
      imports: [MaterialTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallOfFameComponent);
    component = fixture.componentInstance;
    hallOfFameService = TestBed.inject(HallOfFameService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return score entries and fill levels array', (done: DoneCallback) => {
    const spy = jest.spyOn(hallOfFameService, 'getScores');
    hallOfFameService.getScores();
    component.ngOnInit();
    component.scores$.subscribe((scores: ScoreEntry[]) => {
      expect(scores).toEqual(ScoreMocks);
      expect(component.levels.length).toBeGreaterThanOrEqual(3)
      expect(spy).toHaveBeenCalledTimes(1)
      done();
    });
  });
});
