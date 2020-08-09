import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  @Output() public startSearch: EventEmitter<boolean> = new EventEmitter<boolean>();
  public searchText: string;
  constructor() { }

  public ngOnInit(): void {
  }

  public search(): void {
    this.startSearch.emit(!!this.searchText);
  }

}
