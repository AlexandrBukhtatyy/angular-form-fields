import {Observable} from 'rxjs';

export interface IAuthSevice<T> {
  isLoading$: Observable<boolean>;
  isAuthenticated$: Observable<boolean>;
  user$: Observable<T>;
  login: () => void;
  loginWithRedirect: () => void; // { screen_hint: 'signup' }
  logout: () => void; // { returnTo: this.doc.location.origin }

}

export interface IAuthModuleConfig<T> {
  origin?: string;
  authSeviceToken: new (...args: any[]) => IAuthSevice<T>;
}
