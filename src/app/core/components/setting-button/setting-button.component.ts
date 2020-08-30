import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BoardService } from '../../services/board.service';

@Component({
  selector: 'setting-button',
  templateUrl: './setting-button.component.html',
  styleUrls: ['./setting-button.component.scss']
})
export class SettingButtonComponent implements OnInit {
  @Output() public changeShowSettings: EventEmitter<boolean> = new EventEmitter<boolean>();
  public settings: boolean = false;
  constructor( private boardService: BoardService) { }

  public ngOnInit(): void {
  }

  public showSettings(): void {
    this.settings = !this.settings;
    this.boardService.changeShowSettings(this.settings);
  }

}
