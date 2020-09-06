import { Pipe, PipeTransform } from '@angular/core';
import { SearchItemModel } from '../../core/models/search-item.model';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  public transform(array: SearchItemModel[], sortValue: string): SearchItemModel[] {
    let newArray: SearchItemModel[] = array;
    if ( sortValue && sortValue.includes('date') ) {
      newArray = array.sort((a: SearchItemModel, b: SearchItemModel): number => {
        let date1: number = new Date(a.snippet.publishedAt).getTime();
        let date2: number = new Date(b.snippet.publishedAt).getTime();
        return  sortValue === 'dateUp' ? date1 - date2 : date2 - date1;
      });
    }
    if ( sortValue && sortValue.includes('views') ) {
      newArray = array.sort((a: SearchItemModel, b: SearchItemModel): number => {
        let viewCount1: number = +a.statistics.viewCount;
        let viewCount2: number = +b.statistics.viewCount;
        return sortValue === 'viewsUp' ? viewCount1 - viewCount2 : viewCount2 - viewCount1;
      });
    }

    return newArray;
  }

}
