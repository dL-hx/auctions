import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productTitle: string; // 获取传递来的商品标题

  constructor(private routeInfo: ActivatedRoute) {
  }

  ngOnInit() {
    // 参数快照与参数订阅
    // https://blog.csdn.net/changyinling520/article/details/77856933
    this.productTitle = this.routeInfo.snapshot.params['prodTitle'];
  }

}
