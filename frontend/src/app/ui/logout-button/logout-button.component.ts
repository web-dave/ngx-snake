import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
    selector: 'snake-logout-button',
    templateUrl: './logout-button.component.html',
    styleUrls: ['./logout-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutButtonComponent {

    constructor(public authService: AuthService) { }

    logout(): void {
        this.authService.logout({ returnTo: document.location.origin });
    }
}
