import {InjectionToken} from '@angular/core';
import {IAuthSevice} from './interfaces';

export const CONFIG_TOKEN = new InjectionToken<IAuthSevice<any>>('CONFIG_TOKEN');
