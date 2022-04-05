import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { GameComponent } from './components/game.component';

import { GameRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [GameComponent],
    imports: [
        CommonModule,
        GameRoutingModule,
        MatButtonModule
    ]
})
export class GameModule {
}
