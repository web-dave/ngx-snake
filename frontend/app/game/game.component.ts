import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { interval, fromEvent } from 'rxjs';

type IDirection = 'right' | 'left' | 'up' | 'down';
type IPosition = { x: number; y: number };
@Component({
  selector: 'snake-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements AfterViewInit, OnChanges {
  @ViewChild('canvas') foo!: ElementRef<HTMLCanvasElement>;
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  @Input() rows = 15;
  @Input() cols = 15;
  pxlSize = 20;
  direction: IDirection = 'right';
  snake: IPosition[] = [
    {
      x: 2,
      y: this.rows,
    },
  ];
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {}
  go(e: any) {
    console.log(e);
  }

  ngAfterViewInit(): void {
    this.getCtx();
    fromEvent<KeyboardEvent>(document.body, 'keyup').subscribe(({ code }) => {
      this.direction = code.replace('Arrow', '').toLowerCase() as IDirection;
    });
    interval(200).subscribe(() => {
      this.moveSnake();
      this.draw();
    });
  }

  moveSnake() {
    const snake = [...this.snake];
    let nextPos: IPosition = { ...snake[0] };
    snake.pop();
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
    nextPos = this.validateNextPosition(nextPos);
    this.snake = [nextPos, ...snake];
  }

  validateNextPosition(pos: IPosition): IPosition {
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

  draw() {
    this.drawBG();
    this.drawSnake();
    this.drawFood();
  }

  drawBG() {
    this.drawRect('#4b9664', 0, 0, this.canvas.width, this.canvas.height);
  }

  drawSnake() {
    this.snake.forEach((pos) => this.drawRect('deeppink', pos.x, pos.y));
  }

  eat() {}

  drawFood() {
    this.drawRect('#2ef789', 5, 9);
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
