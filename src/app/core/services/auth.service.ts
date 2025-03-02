import {Injectable} from '@angular/core';
import {IAuthSevice} from '@modules/auth';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthSevice<any> {
  isLoading$ = new BehaviorSubject(false);
  isAuthenticated$ = new BehaviorSubject(false);
  user$ = new BehaviorSubject<any>(null);
  constructor() {
  }
  login() {}
  loginWithRedirect() {}
  logout() {}
}
