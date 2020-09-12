
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';

import { SearchResponseModel } from '../models/search-response.model';
import { SearchItemModel } from '../models/search-item.model';
import { StatisticsResponsModel } from '../models/statistics-respons.model';
import { StatisticRensponseItemModel } from '../models/statistic-response-item.model';

import { Config } from '../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private data: SearchResponseModel;
  public data$: BehaviorSubject<SearchItemModel[]> = new BehaviorSubject(null);

  constructor( private http: HttpClient, private config: Config ) { }

  public getData(searchText: string): void {
    this.http.get<SearchResponseModel>(`https://www.googleapis.com/youtube/v3/search?key=${this.config.USER_KEY}&type=video&part=snippet&maxResults=15&q=${searchText}`)
    .pipe(
      mergeMap<SearchResponseModel, Observable<Object>>((data: SearchResponseModel): Observable<Object> => {
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
      let oldData: SearchItemModel[] = this.data.items;
      let newData: SearchItemModel[] = oldData.map(item => {
        let newItem: SearchItemModel = item;
        let idItem: string = item.id.videoId;
        // tslint:disable-next-line:max-line-length
        newItem.statistics = statisticsItems.filter(statisticItem => idItem === statisticItem.id)[0].statistics;
        return newItem;
      });
      this.data$.next(newData);
    });
  }

  public getStatistics(ids: string): Observable<Object> {
    return this.http.get(`https://www.googleapis.com/youtube/v3/videos?id=${ids}&key=${this.config.USER_KEY}
    &part=statistics`);
  }

}
