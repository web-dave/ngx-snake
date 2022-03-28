import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';

import { LogoutButtonComponent } from './logout-button.component';

describe('LogoutButtonComponent', () => {
    let component: LogoutButtonComponent;
    let fixture: ComponentFixture<LogoutButtonComponent>;
    let auth: AuthService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LogoutButtonComponent],
            providers: [{ provide: AuthService, useValue: { logout: jest.fn() } }],
            teardown: { destroyAfterEach: false }
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LogoutButtonComponent);
        component = fixture.componentInstance;
        auth = TestBed.inject(AuthService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
