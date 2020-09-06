import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DetailedItemModel } from '../../models/detailed-item.model';
import { DetailedResponseModel } from '../../models/datailed-response.model';
import { BoardService } from '../../../core/services/board.service';
import { DetailedInformationService } from '../../services/detailed-information.service';
import { Observable, Subject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss']
})
export class DetailedInformationPageComponent implements OnInit {

  public id: string;
  public data: DetailedItemModel;

  // tslint:disable-next-line:max-line-length
  constructor( public route: ActivatedRoute, private boardService: BoardService, private detailedInformationService: DetailedInformationService ) {
    this.route.params
    .pipe(
      mergeMap<Params, Observable<DetailedResponseModel>>((params): Observable<DetailedResponseModel> => {
        return this.detailedInformationService.getDataDetailed(params.id);
      })
    )
    .subscribe(data => {
      console.log(data);
      this.data = data.items[0];
    });
  }

  public ngOnInit(): void { }

}
