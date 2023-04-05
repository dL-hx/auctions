import {Component} from '@angular/core';
// @ts-ignore
// import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mooc 网 Angular入门实战';

  // 声明方法
  test() {
    // $('xxxx').show();
  }
}
