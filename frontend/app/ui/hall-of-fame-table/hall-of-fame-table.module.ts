import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { HallOfFameTableComponent } from './hall-of-fame-table.component';



@NgModule({
  declarations: [
    HallOfFameTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    HallOfFameTableComponent
  ]
})
export class HallOfFameTableModule { }
