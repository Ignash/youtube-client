
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';

import { SearchResponseModel } from '../models/search-response.model';
import { SearchItemModel } from '../models/search-item.model';
import { StatisticsResponsModel } from '../models/statistics-respons.model';
import { StatisticRensponseItemModel } from '../models/statistic-response-item.model';

import { Config } from '../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public searchText: string;

  constructor( private http: HttpClient, private config: Config ) { }

  public getData(): Observable<SearchItemModel[]> {
    return this.http.get<SearchResponseModel>(`https://www.googleapis.com/youtube/v3/search?key=${this.config.USER_KEY}&type=video&part=snippet&maxResults=15&q=${this.searchText}`)
    .pipe(
      // tslint:disable-next-line:max-line-length
      mergeMap<SearchResponseModel, Observable<SearchItemModel[]>>((data: SearchResponseModel): Observable<SearchItemModel[]> => {
        let items: SearchItemModel[] = [...data.items];
        let idItems: string[] = items.map((item: SearchItemModel) => {
          return item.id.videoId;
        });
        let idItemsStr: string = idItems.join(',');
        return this.getStatistics(idItemsStr).pipe(
          map((statisticData: StatisticsResponsModel)  => {
            let statisticsItems: StatisticRensponseItemModel[] = statisticData.items;
            let oldData: SearchItemModel[] = data.items;

            let newData: SearchItemModel[] = oldData.map(item => {
              let newItem: SearchItemModel = item;
              let idItem: string = item.id.videoId;

              newItem.statistics = statisticsItems
                                   .filter(statisticItem => idItem === statisticItem.id)[0]
                                   .statistics;
              return newItem;
            });

            return newData;
          } )
        );
      })
    );
  }

  public setSearchText(text: string): void {
    this.searchText = text;
  }

  public getStatistics(ids: string): Observable<StatisticsResponsModel> {
    return this.http.get<StatisticsResponsModel>(`https://www.googleapis.com/youtube/v3/videos?id=${ids}&key=${this.config.USER_KEY}
    &part=statistics`);
  }

}
