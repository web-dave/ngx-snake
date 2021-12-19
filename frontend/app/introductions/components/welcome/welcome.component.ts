import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'snake-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  title = 'Welcome';

  subTitle = 'Ngx Snake Game by WebDave and Co.';
}
