import { Component, OnInit } from '@angular/core';
import { SearchItemModel } from '../../../core/models/search-item.model';

import { SearchService } from '../../../core/services/search.service';
import { SettingsService } from '../../../core/services/settings.service';

@Component({
  selector: 'search-model',
  templateUrl: './search-model.component.html',
  styleUrls: ['./search-model.component.scss']
})
export class SearchModelComponent implements OnInit {

  public items: SearchItemModel[];
  public sort: string;
  public filterStr: string;

  constructor( private searchService: SearchService,
               private settingsService: SettingsService) { }

  public ngOnInit(): void {
    this.searchService.data$.subscribe((data: SearchItemModel[] ) => {
      this.items = data;
    });

    this.settingsService.sortingValue$.subscribe(value => this.sort = value);
    this.settingsService.filtrStr$.subscribe(value => this.filterStr = value);
  }

}
