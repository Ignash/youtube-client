// tslint:disable-next-line:max-line-length
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent implements OnInit, OnChanges {
  public str: string;
  @Output() public changeFilterStr: EventEmitter<string> = new EventEmitter<string>();
  @Input() public inputFocus: boolean;

  @ViewChild('focus', {static: false})
  public inputElem: ElementRef;

  constructor() { }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if ( this.inputElem ) {
      this.inputElem.nativeElement.focus();
    }
  }

  public changeStr(value: string): void {
    this.changeFilterStr.emit(value);
  }

}
