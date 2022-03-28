import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AuthenticationButtonModule } from '../ui/authentication-button/authentication-button.module';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        RouterModule,
        AuthenticationButtonModule
    ]
})
export class NavigationModule { }
