import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HallOfFameTableModule } from '../ui/hall-of-fame-table/hall-of-fame-table.module';

import { HallOfFameRoutingModule } from './hall-of-fame-routing.module';
import { HallOfFameComponent } from './components/hall-of-fame/hall-of-fame.component';
import { LevelScoresPipe } from './pipes/level-scores.pipe';
import { SortEntriesByScorePipe } from './pipes/sort-entries-by-score.pipe';

@NgModule({
  declarations: [
    HallOfFameComponent,
    LevelScoresPipe,
    SortEntriesByScorePipe
  ],
  imports: [
    CommonModule,
    HallOfFameRoutingModule,
    MatTabsModule,
    HallOfFameTableModule
  ]
})
export class HallOfFameModule {
}
