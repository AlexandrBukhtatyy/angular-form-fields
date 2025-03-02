export interface IAuthSevice<T> {
  user?: T;
}

export interface IAuthModuleConfig<T> {
  origin?: string;
  authSeviceToken: new (...args: any[]) => IAuthSevice<T>;
}
