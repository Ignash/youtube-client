import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss']
})
export class FilterBlockComponent implements OnInit {
  @Input() public showBlock: boolean;
  @Output() public changeSortingValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() public changeStrFilterValue: EventEmitter<string> = new EventEmitter<string>();
  public sort: string;
  public inputFocus: boolean;
  constructor() { }

  public ngOnInit(): void {
  }

  public changeSorting(value: string): void {
    this.changeSortingValue.emit(value);
  }

  public changeStrFilter(value: string): void {
    this.changeStrFilterValue.emit(value);
  }

  public changeFocusInput(value: boolean): void {
    this.inputFocus = value;
  }

}
