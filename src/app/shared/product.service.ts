import {Injectable} from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3, '这是第一个商品,是我在学习Angular 入门实战时创建的', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 2, '这是第二个商品,是我在学习Angular 入门实战时创建的', ['电子产品', '硬件设备']),
    new Product(3, '第三个商品', 3.99, 4, '这是第三个商品,是我在学习Angular 入门实战时创建的', ['图书']),
    new Product(4, '第四个商品', 4.99, 1, '这是第四个商品,是我在学习Angular 入门实战时创建的', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 5.99, 2, '这是第五个商品,是我在学习Angular 入门实战时创建的', ['电子产品']),
    new Product(6, '第六个商品', 6.99, 3, '这是第六个商品,是我在学习Angular 入门实战时创建的', ['电子产品', '硬件设备']),
  ];

  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', '张三', 3, '东西不错'),
    new Comment(2, 1, '2017-02-03 22:22:22', '李四', 3, '东西不错'),
    new Comment(3, 1, '2017-02-04 22:22:22', '王五', 3, '东西不错'),
    new Comment(4, 2, '2017-02-05 22:22:22', '赵六', 3, '东西不错'),
  ];

  constructor() {
  }

  /**
   * 返回所有商品
   */
  getProducts(): Product[] {
    return this.products;
  }

  /**
   * 根据ID返回商品
   * @param id
   */
  getProductById(id: number): Product {
    return this.products.find(product => product.id === Number(id));
  }

  /**
   * 根据商品Id返回评论信息
   */
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId === Number(id));
  }

}

/**
 *  通过ts写程序,需要一个对象来封装产品信息
 * 商品类
 */
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>,
  ) {


  }

}

/**
 * 评论类
 */
export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string,
  ) {
  }
}
