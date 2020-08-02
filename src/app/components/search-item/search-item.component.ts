import { Component, OnInit, Input } from '@angular/core';
import { SearchItemModel } from '../../models/search-item.model';

@Component({
  selector: 'search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {
  @Input() item: SearchItemModel;

  // imgUrl: string = this.item;

  constructor() { }

  ngOnInit(): void {

  }

}
