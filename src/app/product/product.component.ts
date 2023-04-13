import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl= 'https://temp.im/320x150';

  constructor(private productService: ProductService) {// 使用依赖注入
  }

  ngOnInit() {
    // 初始化组件中的数据,调用依赖注入的方法
    this.products = this.productService.getProducts();
  }

}

