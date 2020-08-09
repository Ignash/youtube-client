import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public showResult: boolean = false;
  public showSettings: boolean = false;
  public sortValue: string;
  public filterStr: string;

  public changeShowResult(data: boolean): void {
    this.showResult = data;
  }
  public changeShowSettings(data: boolean): void {
    this.showSettings = data;
  }
  public changeSorting(data: string): void {
    this.sortValue = data;
  }
  public changeFilterStr(data: string): void {
    this.filterStr = data;
  }
}
