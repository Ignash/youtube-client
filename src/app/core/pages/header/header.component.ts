import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItemModel } from '../../models/search-item.model';
import { CustomItemModel } from '../../models/custom-item.model';
import { Store, } from '@ngrx/store';
import { IAppState } from 'src/app/redux/state/app.state';
import { filter, map } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showBlock: boolean;
  public urlForShow: boolean;
  @Output() public showBlockToParent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public showSettingsToParent: EventEmitter<boolean> = new EventEmitter<boolean>();

  public items$: Observable<(SearchItemModel | CustomItemModel)[]> = this.store.pipe(
    map(data=>{
      return [...data.customItem.customItems, ...data.searchData.searchData]
    })
  );

  constructor(private store: Store<IAppState>, private router: Router ) { 
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe(data=>{
      this.urlForShow = router.url === '/search';
    })
   }

  public ngOnInit(): void {
    this.items$.subscribe(data => {
      this.showBlock = data.length > 0;
    });
    
   
  }

  public startShowInput(data: boolean): void {
    this.showBlockToParent.emit(data);
  }

  public showSettings(data: boolean): void {
    this.showSettingsToParent.emit(data);
  }

}
