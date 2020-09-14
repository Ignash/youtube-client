import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { CustomItemModel } from '../../models/custom-item.model';
import { IAppState } from '../../../redux/state/app.state';
import { Store } from '@ngrx/store';
import { SetCustom } from '../../../redux/actions/custom.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public newCardForm: FormGroup;

  constructor( public adminService: AdminService, public router: Router, private store: Store<IAppState> ) {
    this.newCardForm = new FormGroup({
      'titel': new FormControl('', [Validators.required]),
      'disctiption': new FormControl('', [Validators.required]),
      'img': new FormControl('', [Validators.required]),
      'linkVideo': new FormControl('', [Validators.required]),
    });
   }

  public ngOnInit(): void {
  }

  public create(): void {
    const controls: {[key: string]: AbstractControl} = this.newCardForm.controls;

    let controlsName =  Object.keys(controls);

    if (this.newCardForm.invalid) {
      controlsName
      .forEach(controlName => controls[controlName].markAsTouched());
      return;
    }
    let newCardValue: CustomItemModel = this.newCardForm.value;

    controlsName.forEach(controlName => {
        controls[controlName].setValue('');
        controls[controlName].markAsUntouched();
      });
    this.adminService.setNewCard(newCardValue);

    this.store.dispatch(new SetCustom());

  }
}
