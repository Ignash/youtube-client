import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public sortingValue$: Subject<string> = new Subject();
  public filtrStr$: Subject<string> = new Subject();
  public focusInput$: Subject<boolean> = new Subject();
  public searchText$: Subject<string> = new Subject();
  public showSettings$: Subject<boolean> = new Subject();
  public searchText: string;

  constructor( private http: HttpClient ) { }

  public getData(): Observable<Object> {
    return this.http.get('../../assets/data/response.json');
  }

  public setSortingValue(value: string): void {
    this.sortingValue$.next(value);
  }
  public setFiltrStr(value: string): void {
    this.filtrStr$.next(value);
  }
  public setFocusInput(value: boolean): void {
    this.focusInput$.next(value);
  }

  public setSearchText(text: string): void {
    this.searchText$.next(text);
  }

  public changeShowSettings(value: boolean): void {
    this.showSettings$.next(value);
  }

}
