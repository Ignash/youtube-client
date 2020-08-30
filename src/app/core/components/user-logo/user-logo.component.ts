import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-logo',
  templateUrl: './user-logo.component.html',
  styleUrls: ['./user-logo.component.scss']
})
export class UserLogoComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router) { }

  public ngOnInit(): void {
  }

  public logOut(): void {
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }

}
