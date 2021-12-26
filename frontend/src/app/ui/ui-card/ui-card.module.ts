import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UiCardComponent } from './ui-card.component';



@NgModule({
  declarations: [
    UiCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    UiCardComponent
  ]
})
export class UiCardModule { }
