import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comments-count',
  templateUrl: './comments-count.component.html',
  styleUrls: ['./comments-count.component.scss']
})
export class CommentsCountComponent implements OnInit {
  @Input() public commentCount: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
