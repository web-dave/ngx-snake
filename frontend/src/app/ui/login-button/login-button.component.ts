import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'snake-login-button',
    templateUrl: 'login-button.component.html',
    styleUrls: ['./login-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginButtonComponent {

    constructor(public auth: AuthService) { }

    loginWithRedirect(): void {
        this.auth.loginWithRedirect();
    }

}
