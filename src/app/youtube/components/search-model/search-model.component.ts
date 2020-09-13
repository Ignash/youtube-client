import { Component, OnInit } from '@angular/core';
import { SearchItemModel } from '../../../core/models/search-item.model';

import { SettingsService } from '../../../core/services/settings.service';

import { IAppState } from '../../../redux/state/app.state';
import { selectSearchData } from '../../../redux/selectors/search.selector';
import { selectCustom } from '../../../redux/selectors/custom.selector';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CustomItemModel } from '../../../core/models/custom-item.model';

@Component({
  selector: 'search-model',
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss']
})
export class SearchModelComponent implements OnInit {

  public items: SearchItemModel[];
  public sort: string;
  public filterStr: string;

  public items$: Observable<SearchItemModel[]> = this.store.pipe(select(selectSearchData));
  public itemsCustom$: Observable<CustomItemModel[]> = this.store.pipe(select(selectCustom));

  constructor( private settingsService: SettingsService,
               private store: Store<IAppState>) { }

  public ngOnInit(): void {
    this.itemsCustom$.subscribe(data => console.log('custom:' + JSON.stringify(data)));
    this.items$.subscribe(data => console.log('search:' + data));

    this.settingsService.sortingValue$.subscribe(value => this.sort = value);
    this.settingsService.filtrStr$.subscribe(value => this.filterStr = value);
  }

}
