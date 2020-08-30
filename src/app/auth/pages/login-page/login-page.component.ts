import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @ViewChildren('input') public components: QueryList<ElementRef>;

  constructor( public authService: AuthService, public router: Router ) { }

  public ngOnInit(): void {
  }

  public login(): void {
    let logo: string = this.components.first.nativeElement.value;
    let password: string = this.components.last.nativeElement.value;

    this.authService.authUser(logo, password);

    this.router.navigateByUrl('/main');
    this.components.first.nativeElement.value = '';
    this.components.last.nativeElement.value = '';
  }
}
