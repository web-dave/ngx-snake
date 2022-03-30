import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Auth0ClientService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { LogoutButtonComponent } from '../logout-button/logout-button.component';

import { AuthenticationButtonComponent } from './authentication-button.component';

describe('AuthenticationButtonComponent', () => {
    let component: AuthenticationButtonComponent;
    let fixture: ComponentFixture<AuthenticationButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AuthenticationButtonComponent, LogoutButtonComponent, LoginButtonComponent],
            providers: [{ provide: Auth0ClientService, useValue: jest.fn() }],
            teardown: { destroyAfterEach: false }
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthenticationButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
