import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'likes-count',
  templateUrl: './likes-count.component.html',
  styleUrls: ['./likes-count.component.scss']
})
export class LikesCountComponent implements OnInit {
  @Input() public likeCount: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
