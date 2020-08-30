import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../../core/services/board.service';

@Component({
  selector: 'filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonsComponent implements OnInit {
  public sortingValue: string;
  public focusInput: boolean;

  constructor( private boardService: BoardService) { }

  private setSortingValue(sort: string): void {
    if ( sort ) {
      if (this.sortingValue === sort + 'Up') {
        this.sortingValue = sort + 'Down';
      } else {
        this.sortingValue = sort + 'Up';
      }
    }
    this.boardService.setSortingValue(this.sortingValue);
  }

  public ngOnInit(): void {
  }

  public changeSorting(sort: string): void {
    this.setSortingValue(sort);
  }

  public setFocus(): void {
    this.focusInput = !this.focusInput;
    this.boardService.setFocusInput(this.focusInput);
  }

}
