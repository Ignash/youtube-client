import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemModel } from '../models/search-item.model';

@Pipe({
  name: 'filterByWord'
})
export class FilterByWordPipe implements PipeTransform {
  public transform(array: SearchItemModel[], str: string):  SearchItemModel[] {
    if (str) {
      return array.filter((item: SearchItemModel) => item.snippet.title.toLocaleLowerCase().includes(str));
    }
    return array;
  }

}
