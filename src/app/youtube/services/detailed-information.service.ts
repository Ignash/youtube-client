import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { SearchResponseModel } from '../models/search-response.model';
import { SearchItemModel } from '../models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class DetailedInformationService {

  constructor( private http: HttpClient ) { }

  public getData(id: string):  Observable<SearchItemModel[]> {
    let dataValue: Observable<SearchItemModel[]>;
    dataValue = this.http.get('../../../assets/data/response.json').pipe(
      map((item: SearchResponseModel) => {
        return [...item.items.filter((elem: SearchItemModel) => elem.id === id)];
      })
    );
    return dataValue;
  }
}
