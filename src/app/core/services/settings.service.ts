import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public sortingValue$: Subject<string> = new Subject();
  public filtrStr$: Subject<string> = new Subject();
  public showSettings$: Subject<boolean> = new Subject();

  constructor() { }

  public setSortingValue(value: string): void {
    this.sortingValue$.next(value);
  }

  public setFiltrStr(value: string): void {
    this.filtrStr$.next(value);
  }

  public changeShowSettings(value: boolean): void {
    this.showSettings$.next(value);
  }
}
