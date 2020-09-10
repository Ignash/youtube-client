import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public auth: BehaviorSubject<boolean>;
  constructor() {
    this.auth = new BehaviorSubject<boolean>(!!localStorage.getItem('user'));
   }

  public getAuthUser(): User {
    if (localStorage.getItem('user')) {
      let user: User = JSON.parse(localStorage.getItem('user'));
      return user;
    }
  }

  public authUser(logo: string, password: string): void {
    let user: User = {
      login: logo,
      password: password
    };
    localStorage.setItem('user', JSON.stringify(user));
  }

  public logOut(): void {
    localStorage.clear();
  }
}
