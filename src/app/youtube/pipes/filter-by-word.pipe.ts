import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemModel } from '../../core/models/search-item.model';

@Pipe({
  name: 'filterByWord'
})
export class FilterByWordPipe implements PipeTransform {
  public transform(array: SearchItemModel[], str: string):  SearchItemModel[] {
    if (str) {
      return array.filter((item: SearchItemModel) => (item?.snippet?.title||item.titel).toLocaleLowerCase().includes(str));
    }
    return array;
  }

}
