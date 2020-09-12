import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SettingsService } from '../../../core/services/settings.service';

@Component({
  selector: 'filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.scss']
})
export class FilterButtonsComponent implements OnInit {
  public sortingValue: string;
  public focusInput: boolean;
  @Output() public changeFocusInput: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor( private settingsService: SettingsService) { }

  private setSortingValue(sort: string): void {
    if ( sort ) {
      if (this.sortingValue === sort + 'Up') {
        this.sortingValue = sort + 'Down';
      } else {
        this.sortingValue = sort + 'Up';
      }
    }
    this.settingsService.setSortingValue(this.sortingValue);
  }

  public ngOnInit(): void {
  }

  public changeSorting(sort: string): void {
    this.setSortingValue(sort);
  }

  public setFocus(): void {
    this.focusInput = !this.focusInput;
    this.changeFocusInput.emit(this.focusInput);
  }

}
