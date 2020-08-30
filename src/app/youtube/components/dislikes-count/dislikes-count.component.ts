import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dislikes-count',
  templateUrl: './dislikes-count.component.html',
  styleUrls: ['./dislikes-count.component.scss']
})
export class DislikesCountComponent implements OnInit {
  @Input() public dislikeCount: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
