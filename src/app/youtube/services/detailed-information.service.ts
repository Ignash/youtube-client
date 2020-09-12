import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DetailedResponseModel } from '../models/datailed-response.model';
import { Config } from '../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class DetailedInformationService {

  constructor( private http: HttpClient, private config: Config  ) { }

  public getDataDetailed(id: string):  Observable<DetailedResponseModel> {
    return this.http.get<DetailedResponseModel>(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${this.config.USER_KEY}
    &part=snippet,statistics`);
  }
}
