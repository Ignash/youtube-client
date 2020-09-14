import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IAppState } from '../../../redux/state/app.state';
import { Store } from '@ngrx/store';
import { GetSearchData } from '../../../redux/actions/search.actions';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') public input: ElementRef;
  public input$: Observable<InputEvent>;

  constructor( private searchService: SearchService, private store: Store<IAppState>) { }

  public ngOnInit(): void { }

  public ngAfterViewInit(): void {
    this.input$ = fromEvent<InputEvent>(this.input.nativeElement, 'input');
    this.input$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(event => {
      if (this.input.nativeElement.value.length > 2) {
        this.searchService.setSearchText(this.input.nativeElement.value);
        this.store.dispatch(new GetSearchData());
      }
    });
  }
}
