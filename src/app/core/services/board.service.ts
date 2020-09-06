
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';

import { SearchResponseModel } from '../models/search-response.model';
import { SearchItemModel } from '../models/search-item.model';
import { StatisticsResponsModel } from '../models/statistics-respons.model';
import { StatisticRensponseItemModel } from '../models/statistic-response-item.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private key: string = 'AIzaSyDWAAyqBg-BhI48nvwZzP5YxgFgFSJPft4';

  public sortingValue$: Subject<string> = new Subject();
  public filtrStr$: Subject<string> = new Subject();
  public focusInput$: Subject<boolean> = new Subject();
  public searchText$: Subject<string> = new Subject();
  public showSettings$: Subject<boolean> = new Subject();
  public data: SearchResponseModel;
  public dataItems: SearchItemModel[];
  public data$: Subject<SearchItemModel[]> = new Subject();
  public statistics$: Subject<SearchResponseModel> = new Subject();
  public searchText: string;

  constructor( private http: HttpClient ) { }

  public getData(searchText: string): void {
    this.http.get<SearchResponseModel>(`https://www.googleapis.com/youtube/v3/search?key=${this.key}&type=video&part=snippet&maxResults=15&q=${searchText}`)
    .pipe(
      mergeMap<SearchResponseModel, Observable<Object>>((data: SearchResponseModel): Observable<Object> => {
        // this.data$.next(data);
        this.data = data;
        let items: SearchItemModel[] = [...data.items];
        let idItems: string[] = items.map((item: SearchItemModel) => {
          return item.id.videoId;
        });
        let idItemsStr: string = idItems.join(',');
        return this.getStatistics(idItemsStr);
      })
    )
    .subscribe((data: StatisticsResponsModel) => {
      console.log(data.items);
      let statisticsItems: StatisticRensponseItemModel[] = data.items;
      let newData: SearchItemModel[] = this.data.items.map(item => {
        let newItem: SearchItemModel = item;
        let idItem: string = item.id.videoId;
        // tslint:disable-next-line:max-line-length
        newItem.statistics = statisticsItems.filter(statisticItem => idItem === statisticItem.id)[0].statistics;
        return newItem;
      });
      this.dataItems = newData;
      this.data$.next(newData);
    });
  }

  public getStatistics(ids: string): Observable<Object> {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?id=${ids}&key=${this.key}
    &part=statistics`);
  }

  public setSortingValue(value: string): void {
    this.sortingValue$.next(value);
  }
  public setFiltrStr(value: string): void {
    this.filtrStr$.next(value);
  }
  public setFocusInput(value: boolean): void {
    this.focusInput$.next(value);
  }

  public setSearchText(text: string): void {
    this.searchText$.next(text);
  }

  public changeShowSettings(value: boolean): void {
    this.showSettings$.next(value);
  }

}
