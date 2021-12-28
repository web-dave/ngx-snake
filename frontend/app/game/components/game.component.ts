import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import {filter, fromEvent, interval, map, tap} from 'rxjs';

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
  food: IPosition = {x: 5, y: 9};
  @Input() rows = 15;

  @Input() cols = 15;

  pxlSize = 20;

  gameOver = false;

  snake: IPosition[] = [
    {
      x: 2,
      y: 4,
    },
  ];

  constructor() {
  }

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
    let nextPos: IPosition = {...snake[0]};
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
    this.eat(nextPos, snake);
    if (this.checkPositionInSnake(nextPos, snake)) {
      this.gameOver = true;
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

  eat(nextPos: IPosition, snake: IPosition[]) {
    if (nextPos.x !== this.food.x || nextPos.y !== this.food.y) {
      snake.pop();
    } else {
      const nSnake = [nextPos, ...snake];
      do {
        this.setFootPosition();
      } while (this.checkPositionInSnake(this.food, nSnake));
    }
    return snake;
  }

  setFootPosition() {
    this.food = {
      x: Math.floor(Math.random() * this.cols),
      y: Math.floor(Math.random() * this.rows),
    };
  }

  checkPositionInSnake(pos: IPosition, snake: IPosition[]): boolean {
    return snake.some((row) => row.x === pos.x && row.y === pos.y);
  }

  draw() {
    this.drawBG();
    if (!this.gameOver) {
      this.moveSnake();
    }
    this.drawSnake();
    this.drawFood();
    if (this.gameOver) {
      this.drawFinished();
    }
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

  drawFinished() {
    this.ctx.font = '48px serif';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('Game Over!', 2 * this.pxlSize, this.rows / 2 * this.pxlSize);
  }
}
