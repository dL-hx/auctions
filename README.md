### Auctions

// ang黑马课程
// https://www.bilibili.com/video/BV1N4411N74x?p=1&vd_source=631062e9ff21033189723c8ac931c360


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
### 五.数据绑定,响应式编程(RxJS), 管道(格式化输出的可重用对象)

#### 5.1 数据绑定:
> 数据与View 绑定
```
<h1>{{ productTitle }}</h1>

使用插值表达式将一个表达式的值显示在模板上



<img [src]="imgUrl">
使用方括号将html 标签的属性绑定到表达式上


<button (click)="toProductDetail($event)">商品详情</button>
使用小括号将组件控制器的方法绑定到模板上的一个事件处理器上
```


#### 5.1.1 事件绑定
![ang9.png](src%2Fassets%2Fang9.png)


#### 5.2 属性绑定:
插值表达式与属性绑定类似, 插值表达式是dom 属性绑定
``` html
<img src="{{imgUrl}}">
<img [src]="imgUrl">
```

``` ts
  private imgUrl= 'https://temp.im/320x150';
```


```
html 属性与dom 属性不同
html 属性: event.target.getAttribute('value') 随页面更改不可改变
dom 属性: event.target.value   随页面更改更改
```

![ang10.png](src%2Fassets%2Fang10.png)
![ang11.png](src%2Fassets%2Fang11.png)

// 数据更新在DOM属性中,与html属性更新不同
![ang12.png](src%2Fassets%2Fang12.png)



#### 5.3 html属性绑定:

```html
1. 基本的Html属性绑定
<td [attr.colspan]="tableColspan">Something</td>

2. css绑定
class属性替换, 后面样式会替换前面样式===> class="someExpression"
<div class="aaa bbb" [class]="someExpression">Something</div>
动态样式是否生效,追加样式,  固定样式aaa 写前面, 动态样式随条件变化写后面===>最终=> class="aaa special"/class="aaa"
<div class="aaa" [class.special]="isSpecial">Something</div>

多个css 类组合生效的情况,同时控制多个属性

<div [ngClass]="{aaa:isA, bbb:isB}">something</div>
private isA:boolean=true
private bbb:boolean=true

<div [ngClass]="divClass">something</div>
private divClass:any={
  a:false, 
  b:false, 
  c:true
}

3. 样式绑定
<button [style.color]="isDev ? 'red' : 'green' ">Red</button>
// 增加单位
<button [style.font-size.em]="isDev ? 3 : 1 ">Red</button>
private isDev:boolean=true


多个样式
<div [ngStyle]="{ 'font-style' : this.canSave ? 'italic' : 'normal' }"></div>


<div [ngStyle]="divStyle"></div>

private divStyle:any={
  color:'red', 
  background:'yellow', 
}

```

![ang13.png](src%2Fassets%2Fang13.png)



#### 5.4 双向绑定:
常用表单处理, 同步表单字段和内部处理的值, 用在特定的表单元素上. 

```html
<input [value]="name" (input)="doOnInput($event)">
name:string = ''

doOnInput(event){
  this.name = event.target.name
}
``` 

ngModel 简化指令
在input 标签上,ngModel监听的是input 事件. 在其他元素上,ngModel处理的监听的指令会不同


```html
<input [(ngModel)]="name">


name:string = ''

```   

#### 5.5 响应式编程?:

#### 5.6 管道Demo:
`同vue 的管道指令,  filter`
```
// 获取数据,展示到页面
// 处理原始值到展示值的处理,   多个管道可以连接起来处理

大小写管道
<p>我的生日是 {{ birthday | date | uppercase }}</p>
date 管道:
<p >我的生日是 {{ birthday | date | date:'yyyy-MM-dd HH:mm:ss' }}</p>
格式化数字管道, 1-4: 最少一位小数,最多4位小数
<p>圆周率 {{pi| number: '2.1-4'}}</p>

异步管道, async 处理异步数据
<p>圆周率 {{pi| async}}</p>


自定义管道xxx
$ ng g pipe pipe/multiple

birthday = new Date()

pi:number = 3.1415926




内置管道:
https://angular.cn/guide/pipes-overview

demo:示例, 添加multiple 管道


```
#### 5.6 管道Demo:
```
1. 添加商品搜索功能 添加搜索框
2. 添加管道符,用来和输入的字段结合,过滤商品列表
```
$  ng g pipe pipe/filter
写管道,返回匹配到的商品列表



**使用响应式编程的思想来处理事件.**

![5.gif](src%2Fassets%2F5.gif)



### 六.组件间的通信
