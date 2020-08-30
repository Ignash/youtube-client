import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})

export class AuthModule { }
