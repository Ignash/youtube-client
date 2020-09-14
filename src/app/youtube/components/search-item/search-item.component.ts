import { Component, OnInit, Input } from '@angular/core';
import { SearchItemModel } from '../../../core/models/search-item.model';

@Component({
  selector: 'search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  public date: string;
  public thumbnail: string;
  public title: string;

  @Input() public item: SearchItemModel;

  constructor() { }

  public ngOnInit(): void {
    this.date = this.item.snippet ? this.item.snippet.publishedAt : this.item.date;
    this.thumbnail = this.item.snippet ? this.item.snippet.thumbnails.medium.url : this.item.img;
    this.title = this.item.snippet ? this.item.snippet.title : this.item.titel;
  }

}
