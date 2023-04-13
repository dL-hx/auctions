import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Product, Comment, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product; // 获取传递来的商品

  comments: Comment[]; // 获取传递来的评论

  constructor(private routeInfo: ActivatedRoute,
              // 使用依赖注入
              private productService: ProductService
  ) {
  }

  ngOnInit() {
    // 参数快照与参数订阅
    // https://blog.csdn.net/changyinling520/article/details/77856933
    const productId: number = this.routeInfo.snapshot.params['productId'];
    // 使用依赖注入,拿到获取的商品
    this.product = this.productService.getProductById(productId);
    this.comments = this.productService.getCommentsForProductId(productId);
  }

}
