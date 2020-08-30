import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor( private router: Router) { }

  @HostListener('click')
  private onClick(): void {
    this.router.navigate(['main']);
   }
  public ngOnInit(): void {
  }

}
