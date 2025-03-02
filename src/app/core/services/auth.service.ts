import {Injectable} from '@angular/core';
import {IAuthSevice} from '@modules/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthSevice<any> {
  constructor() {
  }
}
