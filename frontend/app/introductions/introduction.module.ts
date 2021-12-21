import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { UiCardModule } from '../ui/ui-card/ui-card.module';

import { IntroductionRoutingModule } from './introduction-routing.module';
import { IntroductionComponent } from './introduction.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [
    IntroductionComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    UiCardModule,
    MatButtonModule
  ]
})
export class IntroductionModule { }
