import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponseModel } from '../../models/search-response.model';
import { SearchItemModel } from '../../models/search-item.model';


@Component({
  selector: 'search-model',
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss']
})
export class SearchModelComponent implements OnInit {

  items: SearchItemModel[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData().subscribe((data: SearchResponseModel ) => {
      this.items = [...data.items];
      // console.log(this.items[1].snippet.thumbnails);
    });
  }

  getData(){
    return this.http.get('../../assets/data/response.json')
  }
    

}
