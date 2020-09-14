import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import { GetSearchData, ESearchActions, GetSearchDataSuccess } from '../actions/search.actions';
import { SearchService } from '../../core/services/search.service';
import { SearchItemModel } from '../../core/models/search-item.model';

@Injectable()
export class SearchEffects {

  @Effect()
  // tslint:disable-next-line:typedef
  public getSearchData$ = this.actions$.pipe(
    ofType<GetSearchData>(ESearchActions.GetSearchData),
    switchMap(() => this.searchService.getData()),
    switchMap((data: SearchItemModel[]) => of(new GetSearchDataSuccess(data)))
  );

  constructor(
    private searchService: SearchService,
    private actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
