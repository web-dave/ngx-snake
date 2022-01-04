import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HallOfFameResolver } from './hall-of-fame/resolvers/hall-of-fame.resolver';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    component: NavigationComponent,
    path: '',
    children: [
      {
        path: 'game',
        loadChildren: () => import('./game/game.module').then(mod => mod.GameModule)
      },
      {
        path: 'hof',
        loadChildren: () => import('./hall-of-fame/hall-of-fame.module').then(m => m.HallOfFameModule),
        resolve: {
          scores: HallOfFameResolver
        }
      },
      {
        path: 'intro',
        loadChildren: () => import('./introductions/introduction.module').then(m => m.IntroductionModule)
      },
      { path: '**', redirectTo: 'intro', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
