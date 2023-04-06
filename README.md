### Auctions

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.


https://plugins.zhile.io/files/ide-eval-resetter-2.1.6.zip

```
ng -v
@angular/cli: 1.3.2
node: 8.3.0
npm: 5.3.0
os: win32 x64
```

```shell

卸载老版本： 
npm uninstall -g angular-cli 
npm uninstall –save-dev angular-cli 
卸载新版本： 
npm uninstall -g @angular/cli 
清除下缓存 
npm cache clean
```




```shell
$ 
$ npm i -g @angular/cli@1.3.2
```

```shell
$ ng -v
```


```shell
$ ng new auction
```

```
@NgModule {
declarations:{},// 组件,指令,管道
imports:[], // 引入的依赖
providers:[],// 服务
bootstrap:[]// 主要的模块
}
```




### 安装第三方库
```sheLL
$  npm i jquery@3.2.1 bootstrap@3.3.7 --save
$  npm i @types/jquery@3.2.16 @types/bootstrap --save-dev
```

组件化开发(创建页面)
```shell
$ ng g component navbar
$ ng g component footer
$ ng g component search
$ ng g component carousel
$ ng g component product
$ ng g component stars
```

### 搜索图形占位服务
> https://temp.im/800x300

### 指令
ngFor

###
```angular2html
标签绑定 {{}}
<h4 class="pull-right">{{product.price}}</h4>

属性绑定
<img [src]="imgUrl" alt="">

显示有的空心有的实心 动态样式绑定
<span *ngFor="let star of stars" class="glyphicon glyphicon-star"
      [class.glyphicon-star-empty]="star"
>

注入属性@Input,组件的参数传递

  : 表示 Star组件中rating 值由 product.rating 传入.
      <app-stars [rating]="product.rating"></app-stars>

export class StarsComponent implements OnInit {
  @Input()
  private rating: number = 0;
}
```
### 区别
ang: 数据驱动
jq:操作dom,插入模板

### 小结
```angular2html
Ang 程序架构
开发环境
Auction 第一个版本
```

### 路由
...
