import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getAuthUser(): User {
    if (localStorage.getItem('user')) {
      let user: User = JSON.parse(localStorage.getItem('user'));
      console.log(user);
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
