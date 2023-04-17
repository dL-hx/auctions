import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl = 'https://temp.im/320x150';

  // 声明属性,获取输入的数据
  private keyword: string;

  // 声明FormControl类型的属性 titleFilter, 在页面上使用  [formControl]="titleFilter" 指令与属性进行绑定,当input 中值发生改变时候,会自动将值同步到 titleFilter 字段上,
  // 需要订阅change事件,将值绑定到  keyword 上
  private titleFilter: FormControl = new FormControl();

  constructor(private productService: ProductService) {// 使用依赖注入
    // 订阅事件, 将改变的值,赋值到keyword属性上
    this.titleFilter.valueChanges
    .debounceTime(500) // 防抖 函数 需要引入import 'rxjs/Rx'
    .subscribe(value=> this.keyword = value)
  }

  ngOnInit() {
    // 初始化组件中的数据,调用依赖注入的方法
    this.products = this.productService.getProducts();
  }

}

