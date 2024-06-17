import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: Product[], order: string): Product[] {
    if (!products) return [];
    if (order === 'asc') {
      return products.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      return products.sort((a, b) => b.price - a.price);
    }
    return products;
  }

}
