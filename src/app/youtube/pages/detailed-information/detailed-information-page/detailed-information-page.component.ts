import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchItemModel } from '../../../models/search-item.model';
import { DetailedInformationService } from '../../../services/detailed-information.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss']
})
export class DetailedInformationPageComponent implements OnInit {

  public id: string;
  public data: SearchItemModel;

  constructor( public route: ActivatedRoute, private detailedInformation: DetailedInformationService ) { }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });
    if (this.id) {
      this.detailedInformation.getData(this.id).subscribe((data: SearchItemModel[]) => {
        this.data = data[0];
      });
    }
  }

}
