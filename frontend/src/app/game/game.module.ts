import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './components/game.component';

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule {
}
