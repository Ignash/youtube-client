import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public show: Subject<boolean> = new Subject ();

  constructor() { }

  public showLoader(): void {
    this.show.next(true);
  }
  public hideLoader(): void {
    this.show.next(false);
  }
}
