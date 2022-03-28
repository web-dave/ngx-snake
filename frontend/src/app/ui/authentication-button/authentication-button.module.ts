import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginButtonModule } from '../login-button/login-button.module';
import { LogoutButtonModule } from '../logout-button/logout-button.module';
import { AuthenticationButtonComponent } from './authentication-button.component';

@NgModule({
    declarations: [AuthenticationButtonComponent],
    imports: [CommonModule, LoginButtonModule, LogoutButtonModule],
    exports: [AuthenticationButtonComponent]
})
export class AuthenticationButtonModule {
}
