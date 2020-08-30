import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss']
})
export class VideoTitleComponent implements OnInit {
  @Input() public title: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
