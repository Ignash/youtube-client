import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DetailedItemModel } from '../../models/detailed-item.model';
import { DetailedResponseModel } from '../../models/datailed-response.model';
import { DetailedInformationService } from '../../services/detailed-information.service';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss']
})
export class DetailedInformationPageComponent implements OnInit {

  public data: DetailedItemModel;
  public url: Observable<string>;
  public publishedAt: Observable<string>;
  public title: Observable<string>;
  public description: Observable<string>;
  public viewCount: Observable<string>;
  public likeCount: Observable<string>;
  public dislikeCount: Observable<string>;
  public commentCount: Observable<string>;

  // tslint:disable-next-line:max-line-length
  constructor( public route: ActivatedRoute, private detailedInformationService: DetailedInformationService ) {
    this.route.params
    .pipe(
      mergeMap<Params, Observable<DetailedResponseModel>>((params): Observable<DetailedResponseModel> => {
        return this.detailedInformationService.getDataDetailed(params.id);
      })
    )
    .subscribe(data => {
      this.data = data.items[0];
      this.publishedAt = of(data.items[0].snippet.publishedAt);
      this.title = of(data.items[0].snippet.title);
      this.description = of(data.items[0].snippet.description);
      this.url = of(data.items[0].snippet.thumbnails.standard.url);
      this.viewCount = of(data.items[0].statistics.viewCount);
      this.likeCount = of(data.items[0].statistics.likeCount);
      this.dislikeCount = of(data.items[0].statistics.dislikeCount);
      this.commentCount = of(data.items[0].statistics.commentCount);
    });
  }

  public ngOnInit(): void { }

}
