import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], searchText: string): Product[] {
    if (!products) {
      return [];
    }
    if (!searchText) {
      return products;
    }
    return products.filter(product =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

}
