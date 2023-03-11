import {Inject, Injectable} from '@angular/core';
import {WINDOW} from "../core/window.token";

@Injectable({providedIn: 'root'})
export class FormCacheService {
  constructor(@Inject(WINDOW) private readonly windowRef: Window) {
  }

  get(key: string): string | null {
    const storedValue = this.windowRef.localStorage.getItem(key);
    return storedValue
      ? JSON.parse(storedValue)
      : null;
  }

  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  reset(key: string) {
    window.localStorage.removeItem(key);
  }
}
