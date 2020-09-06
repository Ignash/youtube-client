import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { DetailedResponseModel } from '../models/datailed-response.model';
import { BoardService } from '../../core/services/board.service';

@Injectable({
  providedIn: 'root'
})
export class DetailedInformationService {
  private key: string = 'AIzaSyDWAAyqBg-BhI48nvwZzP5YxgFgFSJPft4';

  constructor( private http: HttpClient, private boardService: BoardService ) { }

  public getDataDetailed(id: string):  Observable<DetailedResponseModel> {
    // let data: SearchItemModel[] = this.boardService.dataItems;
    // console.log(this.boardService.data.items);
    // let dataValue: SearchItemModel = data.filter((elem: SearchItemModel) => elem.id.videoId === id)[0];

    return this.http.get<DetailedResponseModel>(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${this.key}
    &part=snippet,statistics`);
  }
}
