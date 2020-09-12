// tslint:disable-next-line:max-line-length
import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef, Input } from '@angular/core';
import { SettingsService } from '../../../core/services/settings.service';

@Component({
  selector: 'filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent implements OnInit, OnChanges {
  public str: string;
  @Input() public focus: boolean;

  @ViewChild('focus', {static: false})
  public inputElem: ElementRef;

  constructor( private settingsService: SettingsService ) { }

  public ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if ( this.inputElem ) {
      this.inputElem.nativeElement.focus();
    }
  }

  public changeStr(value: string): void {
    this.settingsService.setFiltrStr(value);
  }

}
