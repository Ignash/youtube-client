import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showBlock: boolean;
  @Output() public showBlockToParent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public showSettingsToParent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor( private searchService: SearchService ) { }

  public ngOnInit(): void {

    this.searchService.data$.subscribe(data => {
      this.showBlock = !!data;
    });
  }

  public startShowInput(data: boolean): void {
    this.showBlockToParent.emit(data);
  }

  public showSettings(data: boolean): void {
    this.showSettingsToParent.emit(data);
  }

}
