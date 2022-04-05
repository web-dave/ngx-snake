import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ScoreEntryDto } from '../../../api/models/score-entry-dto';
import { HallOfFameService } from '../../../api/services/hall-of-fame.service';
import { MaterialTestingModule } from '../../../core/testing/material-testing/material-testing.module';
import { ScoreMocks } from '../../mocks/score-mocks';

import { HallOfFameComponent } from './hall-of-fame.component';
import DoneCallback = jest.DoneCallback;

xdescribe('HallOfFameComponent', () => {
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
    const spy = jest.spyOn(hallOfFameService, 'hallOfFameControllerGetList');
    hallOfFameService.hallOfFameControllerGetList = jest.fn().mockReturnValue(of(ScoreMocks));
    component.scores$.subscribe((scores: ScoreEntryDto[]) => {
      expect(scores).toEqual(ScoreMocks);
      expect(component.levels.length).toBeGreaterThanOrEqual(3);
      expect(spy).toHaveBeenCalledTimes(1);
      done();
    });
  });
});
