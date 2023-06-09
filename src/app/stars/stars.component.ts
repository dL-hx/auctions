import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  private rating: number = 0;

  private stars: boolean[];

  constructor() {
  }

  ngOnInit() {
    // 显示五颗星星
    // this.stars = [false, false, true, true, true];
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
