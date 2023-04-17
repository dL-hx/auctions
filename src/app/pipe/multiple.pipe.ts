import { Pipe, PipeTransform } from '@angular/core';
// 试试自己写的管道
// <h4 class="pull-right">{{product.price|multiple:2}}</h4>

@Pipe({ // 管道名称
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  /**
   * 
   * @param value 输入进来的原始的值
   * @param args 可选参数, 使用 multiple 管道时候,传入来的参数
   * @returns 
   */
  transform(value: number, args?: number): any {
    // 根据传入来的原始值, 与可选参数,  返回转换后的值
    if (!args) {
      args = 1
    }
    return value * args;
  }

}
