import { Pipe, PipeTransform } from '@angular/core';
// 管道中多个参数传递用:(冒号分开)
// {{ 要转化的值 | filter: params1:params2 }}
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // 写管道,返回匹配到的商品列表
  transform(list: any[], filterField: string, keyword: string): any {
    if (!filterField || !keyword) {
      return list
    }

    // 返回匹配到的元素
    return list.filter(item => {
      let fieldValue = item[filterField] // 获取过滤Filter 字段的值,是根据名称,还是描述字段过滤
      return fieldValue.indexOf(keyword) >= 0;
    })
  }
}
