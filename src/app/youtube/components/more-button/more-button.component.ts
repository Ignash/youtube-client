import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'more-button',
  templateUrl: './more-button.component.html',
  styleUrls: ['./more-button.component.scss']
})
export class MoreButtonComponent implements OnInit {
  @Input() public id: string;

  constructor( private router: Router) { }
  @HostListener('click')
  private onClick(): void {
    this.router.navigate(['main', this.id]);
   }

  public ngOnInit(): void { }

}
