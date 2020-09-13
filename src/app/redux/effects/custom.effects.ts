
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IAppState } from '../state/app.state';
import { Store, select } from '@ngrx/store';

import { CustomItemModel } from '../../core/models/custom-item.model';
import { AdminService } from './../../core/services/admin.service';
import { ECustomActions, SetCustom, AddToCustom } from '../actions/custom.actions';

@Injectable()
export class CustomEffects {

  @Effect()
  public addToCustom$: Observable<AddToCustom> = this.actions$.pipe(
    ofType<SetCustom>(ECustomActions.SetCustom),
    switchMap(() => this.adminService.createCard()),
    switchMap((newCard: CustomItemModel) => {
      return of(new AddToCustom(newCard));
    })
  );

  constructor(
    private adminService: AdminService,
    private actions$: Actions,
    private _store: Store<IAppState>
  ) {}
}
