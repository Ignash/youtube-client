import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../../core/services/board.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public showFilterBlock: boolean;
  public showSearchModel: boolean;

  constructor( private boardService: BoardService) { }

  public ngOnInit(): void {
    this.boardService.showSettings$.subscribe(value => {
      this.showFilterBlock = value;
    });
    this.boardService.searchText$.subscribe(text => {
      this.showSearchModel = !!text;
    });
  }

}
