import { Component, OnInit, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public loginForm: FormGroup;

  constructor( public authService: AuthService, public router: Router ) {
    this.loginForm = new FormGroup({
      'login': new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      'password': new FormControl('', [Validators.required, Validators.minLength(4)])
    });
   }

  public ngOnInit(): void {
  }

  public login(): void {
    const controls: {[key: string]: AbstractControl} = this.loginForm.controls;

    if (this.loginForm.invalid) {
      Object.keys(controls)
      .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }

    this.authService.authUser(this.loginForm.value);
    this.router.navigateByUrl('/search');

  }
}
