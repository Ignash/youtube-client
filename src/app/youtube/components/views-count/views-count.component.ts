import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'views-count',
  templateUrl: './views-count.component.html',
  styleUrls: ['./views-count.component.scss']
})
export class ViewsCountComponent implements OnInit {
  @Input() public viewCount: string;

  constructor() { }

   public ngOnInit(): void {
  }

}
