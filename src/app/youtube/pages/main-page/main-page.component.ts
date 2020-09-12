import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/services/settings.service';
import { LoaderService } from '../../../core/services/loader.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public showFilterBlock: boolean;
  public showLoader: boolean = false;

  constructor( private settingsService: SettingsService, private loaderService: LoaderService) { }

  public ngOnInit(): void {

    this.loaderService.show.subscribe(data => {
      console.log(89);
      this.showLoader = data;
    });

    this.settingsService.showSettings$.subscribe(value => {
      this.showFilterBlock = value;
    });

  }

}
