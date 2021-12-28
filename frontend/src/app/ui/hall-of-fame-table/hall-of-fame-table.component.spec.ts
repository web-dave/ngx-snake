import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialTestingModule } from '../../core/testing/material-testing/material-testing.module';

import { HallOfFameTableComponent } from './hall-of-fame-table.component';

describe('HallOfFameTableComponent', () => {
  let component: HallOfFameTableComponent;
  let fixture: ComponentFixture<HallOfFameTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HallOfFameTableComponent],
      imports: [MaterialTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallOfFameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
