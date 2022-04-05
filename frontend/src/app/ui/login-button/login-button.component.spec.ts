import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';

import { LoginButtonComponent } from './login-button.component';

describe('LoginButtonComponent', () => {
    let component: LoginButtonComponent;
    let fixture: ComponentFixture<LoginButtonComponent>;
    let auth: AuthService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginButtonComponent],
            providers: [{ provide: AuthService, useValue: jest.fn() }],
            teardown: { destroyAfterEach: false }
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginButtonComponent);
        component = fixture.componentInstance;
        auth = TestBed.inject(AuthService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
