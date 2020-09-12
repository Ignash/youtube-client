import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/services/settings.service';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public showFilterBlock: boolean;

  constructor( private settingsService: SettingsService) { }

  public ngOnInit(): void {
    this.settingsService.showSettings$.subscribe(value => {
      this.showFilterBlock = value;
    });

  }

}
