// tslint:disable-next-line:max-line-length
import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { BoardService } from '../../../core/services/board.service';

@Component({
  selector: 'filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent implements OnInit, OnChanges {
  public str: string;

  @ViewChild('focus', {static: false})
  public inputElem: ElementRef;

  constructor( private boardService: BoardService ) {
    this.boardService.focusInput$.subscribe(value => {
      if ( this.inputElem ) {
        this.inputElem.nativeElement.focus();
      }
    });
  }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if ( this.inputElem ) {
      this.inputElem.nativeElement.focus();
    }
  }

  public changeStr(value: string): void {
    this.boardService.setFiltrStr(value);
  }

}
