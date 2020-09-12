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

  public authUser(userData: User): void {
    localStorage.setItem('user', JSON.stringify(userData));
  }

  public logOut(): void {
    localStorage.clear();
  }
}
