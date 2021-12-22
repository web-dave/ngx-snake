import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HallOfFameComponent } from './components/hall-of-fame/hall-of-fame.component';

const routes: Routes = [
  { path: '', component: HallOfFameComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HallOfFameRoutingModule {
}
