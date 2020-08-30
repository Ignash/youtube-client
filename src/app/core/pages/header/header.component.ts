import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BoardService } from '../../services/board.service';

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

  constructor( private boardService: BoardService ) { }

  public ngOnInit(): void {
    this.boardService.searchText$.subscribe(text => {
      this.showBlock = !!text;
    });
  }

  public startShow(data: boolean): void {
    this.showBlockToParent.emit(data);
  }

  public showSettings(data: boolean): void {
    this.settings = data;
    this.showSettingsToParent.emit(data);
  }

}
