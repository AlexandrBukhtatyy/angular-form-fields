import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FEATURE_TOGGLE_STORAGE_SERVICE_TOKEN } from './feature-toggle.module';

export type featureFlagsType = {};

export interface FeaturesStorageService {
  featureFlags$$: BehaviorSubject<featureFlagsType>;
  isEnabled(key: string): boolean;
}

@Injectable({ providedIn: 'root' })
export class FeatureToggleService {
  onChanges$: Observable<featureFlagsType>;

  constructor(
    @Inject(FEATURE_TOGGLE_STORAGE_SERVICE_TOKEN)
    private storageService: FeaturesStorageService
  ) {
    this.onChanges$ = storageService.featureFlags$$.asObservable();
  }

  isEnabled(key: string): boolean {
    return this.storageService.isEnabled(key);
  }
}
