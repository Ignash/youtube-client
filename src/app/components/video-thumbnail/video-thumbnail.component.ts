import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss']
})
export class VideoThumbnailComponent implements OnInit {
  @Input() public thumbnail: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
