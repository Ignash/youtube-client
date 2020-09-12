import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter-block',
  templateUrl: './filter-block.component.html',
  styleUrls: ['./filter-block.component.scss']
})
export class FilterBlockComponent implements OnInit {

  public focusInput: boolean;
  constructor() { }

  public ngOnInit(): void {
  }

  public setFocusInput(value: boolean): void {
    this.focusInput = value;
  }
}
