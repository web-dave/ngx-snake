import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';
import { of } from 'rxjs';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
    let component: GameComponent;
    let fixture: ComponentFixture<GameComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [GameComponent],
            providers: [
                {
                    provide: AuthService, useValue: {
                        user$: of(null)
                    }
                }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(GameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should draw BG, Food and Snake', () => {
        const drawBG = jest.spyOn(component, 'drawBG');
        const drawFood = jest.spyOn(component, 'drawFood');
        const drawSnake = jest.spyOn(component, 'drawSnake');

        component.ctx = {
            fillStyle: '',
            fillRect(x: number, y: number, w: number, h: number) {},
            beginPath() {},
            arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise?: boolean) {},
            stroke() {},
            fill() {}
        } as CanvasRenderingContext2D;
        component.draw();

        expect(drawBG).toHaveBeenCalledTimes(1);
        expect(drawFood).toHaveBeenCalledTimes(1);
        expect(drawSnake).toHaveBeenCalledTimes(1);
    });
});
