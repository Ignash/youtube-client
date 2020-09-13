import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchInputComponent } from './components/search-input/search-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { SettingButtonComponent } from './components/setting-button/setting-button.component';
import { UserLogoComponent } from './components/user-logo/user-logo.component';

import { HeaderComponent } from './pages/header/header.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchInputComponent,
    LogoComponent,
    SettingButtonComponent,
    UserLogoComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class CoreModule { }
