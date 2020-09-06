import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  public searchText: string;
  constructor( private boardService: BoardService) { }

  public ngOnInit(): void {
  }

  public search(): void {
    if (this.searchText.length > 3) {
      this.boardService.setSearchText(this.searchText);
      this.boardService.getData(this.searchText);
    }
  }

}
