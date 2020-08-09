import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonsComponent implements OnInit {
  @Output() public sorting: EventEmitter<string> = new EventEmitter<string>();
  public sortingValue: string;
  public focusInput: boolean;
  @Output() public setFocusInput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  private setSortingValue(sort: string, value: string): void {
    if ( sort === value ) {
      if (this.sortingValue === value + 'Up') {
        this.sortingValue = value + 'Down';
        this.sorting.emit(value + 'Down');
      } else {
        this.sortingValue = value + 'Up';
        this.sorting.emit(value + 'Up');
      }

    }
  }

  public ngOnInit(): void {
  }

  public changeSorting(sort: string): void {
    this.setSortingValue(sort, 'date');
    this.setSortingValue(sort, 'views');
  }

  public setFocus(): void {
    this.focusInput = !this.focusInput;
    this.setFocusInput.emit(this.focusInput);
  }

}
