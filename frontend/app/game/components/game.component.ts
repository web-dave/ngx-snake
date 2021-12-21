import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { filter, fromEvent, interval, map, tap } from 'rxjs';

type IDirection = 'right' | 'left' | 'up' | 'down';
type IPosition = { x: number; y: number };

@Component({
  selector: 'snake-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements AfterViewInit {
  @ViewChild('canvas') foo!: ElementRef<HTMLCanvasElement>;

  canvas!: HTMLCanvasElement;
  direction: IDirection = 'right';
  ctx!: CanvasRenderingContext2D;
  food: IPosition = { x: 5, y: 9 };
  @Input() rows = 15;

  @Input() cols = 15;

  pxlSize = 20;

  snake: IPosition[] = [
    {
      x: 2,
      y: 4,
    },
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.getCtx();
    fromEvent<KeyboardEvent>(document.body, 'keyup')
      .pipe(
        tap((event) => {
          event.preventDefault();
          event.stopPropagation();
          event.cancelBubble = true;
        }),
        map((event) => event.code),
        map((code) => code.replace('Arrow', '').toLowerCase() as IDirection),
        filter((code) => ['right', 'left', 'up', 'down'].includes(code))
      )
      .subscribe((code) => {
        console.log(code);
        this.direction = code;
      });
    interval(300).subscribe(() => this.draw());
  }

  moveSnake() {
    const snake = [...this.snake];
    let nextPos: IPosition = { ...snake[0] };
    switch (this.direction) {
      case 'up':
        nextPos.y -= 1;
        break;
      case 'down':
        nextPos.y += 1;
        break;
      case 'left':
        nextPos.x -= 1;
        break;
      case 'right':
        nextPos.x += 1;
        break;
    }
    nextPos = this.validatePosition(nextPos);
    if (nextPos.x !== this.food.x || nextPos.y !== this.food.y) {
      snake.pop();
    } else {
      this.food = {
        x: Math.floor(Math.random() * this.cols),
        y: Math.floor(Math.random() * this.rows),
      };
    }
    this.snake = [nextPos, ...snake];
  }

  validatePosition(pos: IPosition): IPosition {
    if (pos.y <= -1) {
      pos.y = this.rows - 1;
    }
    if (pos.y >= this.rows) {
      pos.y = 0;
    }
    if (pos.x <= -1) {
      pos.x = this.cols - 1;
    }
    if (pos.x >= this.cols) {
      pos.x = 0;
    }
    return pos;
  }

  eat() {}

  draw() {
    this.drawBG();
    this.moveSnake();
    this.drawSnake();
    this.drawFood();
  }

  drawBG() {
    this.drawRect('#4B9664', 0, 0, this.canvas.width, this.canvas.height);
  }

  drawSnake() {
    this.snake.forEach((pos) => this.drawRect('deeppink', pos.x, pos.y));
  }

  drawFood() {
    this.drawRect('#2EF789', this.food.x, this.food.y);
  }

  drawRect(
    color: string,
    x: number,
    y: number,
    w: number = this.pxlSize,
    h: number = this.pxlSize
  ) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x * this.pxlSize, y * this.pxlSize, w, h);
  }

  getCtx() {
    this.canvas = this.foo.nativeElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }
}
