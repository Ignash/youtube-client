import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponseModel } from '../../models/search-response.model';
import { SearchItemModel } from '../../models/search-item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'search-model',
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss']
})
export class SearchModelComponent implements OnInit {

  public items: SearchItemModel[];

  constructor(private http: HttpClient) { }

  public ngOnInit(): void {
    this.getData().subscribe((data: SearchResponseModel ) => {
      this.items = [...data.items];
      // console.log(this.items[1].snippet.thumbnails);
    });
  }

  public getData(): Observable<Object> {
    return this.http.get('../../assets/data/response.json');
  }
}
