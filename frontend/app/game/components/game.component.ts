import { AfterViewInit, Component, ElementRef, Input, ViewChild, } from '@angular/core';
import { fromEvent, interval } from 'rxjs';

@Component({
  selector: 'snake-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements AfterViewInit {
  @ViewChild('canvas') foo!: ElementRef<HTMLCanvasElement>;

  canvas!: HTMLCanvasElement;

  ctx!: CanvasRenderingContext2D;

  @Input() rows = 10;

  @Input() cols = 10;

  pxlSize = 20;

  snake = [
    {
      x: 2,
      y: 4,
    },
    {
      x: 1,
      y: 4,
    },
    {
      x: 1,
      y: 5,
    },
    {
      x: 1,
      y: 6,
    },
  ];

  constructor() {}

  go(e: any) {
    console.log(e);
  }

  ngAfterViewInit(): void {
    this.getCtx();
    fromEvent<KeyboardEvent>(document.body, 'keyup').subscribe(({ code }) =>
      console.log(code)
    );
    interval(1000).subscribe(() => this.draw());
  }

  draw() {
    this.drawBG();
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
    this.drawRect('#2EF789', 5, 9);
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
