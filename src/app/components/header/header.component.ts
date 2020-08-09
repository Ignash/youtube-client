import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showBlock: boolean;
  public settings: boolean;
  @Output() public showBlockToParent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public showSettingsToParent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public ngOnInit(): void {
  }

  public startShow(data: boolean): void {
    this.showBlock = data;
    this.showBlockToParent.emit(data);
  }

  public showSettings(data: boolean): void {
    this.settings = data;
    this.showSettingsToParent.emit(data);
  }

}
