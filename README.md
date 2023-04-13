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




### 一. 安装第三方库
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

### 二.指令
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

### 三.路由
https://blog.csdn.net/changyinling520/article/details/77856933
...
用来跳转页面
```

1. 创建商品详情组件,显示商品的图片与标题
2. 重构代码,把轮播图组件与商品列表组件封装到HOME组件中
3. 配置路由,在导航到商品详情组件时传递商品的标题参数
4. 修改APP组件,根据路由显示HOME组件或商品详情组件
5. 修改商品列表组件,给商品标题添加带routerLink 指令的链接,导航到商品详情路由

```

小结

```
路由介绍
路由基础
路由传递数据---快照/订阅
重定向路由
子路由
辅助路由
resolve守卫

```
3-4
### 四.依赖注入
1.依赖注入: DI, 依赖注入,IOC 控制反转
2.依赖注入:注入器与提供器
3.层级 
![ang7.png](src%2Fassets%2Fang7.png)
![ang8.png](src%2Fassets%2Fang8.png)

```shell
$ ng g service shared/product
```

小结

```
介绍依赖注入以及要解决的问题
用依赖注入的好处
讲解ang框架提供器的各种配置, + 介绍注入器以及注入器的各种关系
优化在线竞拍程序
```


模块.组件,路由,依赖注入
### 五.数据绑定,响应式编程(RxJS), 管道
