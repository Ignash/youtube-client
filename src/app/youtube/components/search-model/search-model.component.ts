import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponseModel } from '../../models/search-response.model';
import { SearchItemModel } from '../../models/search-item.model';

import { BoardService } from '../../../core/services/board.service';

@Component({
  selector: 'search-model',
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss']
})
export class SearchModelComponent implements OnInit {

  public items: SearchItemModel[];
  public sort: string;
  public filterStr: string;

  constructor(private http: HttpClient, private boardService: BoardService) { }

  public ngOnInit(): void {
    this.boardService.getData().subscribe((data: SearchResponseModel ) => {
      this.items = [...data.items];
    });
    this.boardService.sortingValue$.subscribe(value => this.sort = value);
    this.boardService.filtrStr$.subscribe(value => this.filterStr = value);
  }

}
