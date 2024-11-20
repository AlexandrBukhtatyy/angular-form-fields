import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FeaturesStorageService,
  FeatureToggleService,
} from './feature-toggle.service';

export interface FeatureToggleConfig {
  /**
   * URL куда будет редиректить guard если парамет redirectTo не указан(по умолчанию)
   */
  guardFailureUri: string;
  /**
   * Сервис который будет ответственен за хранение ключей и проверку доступности ключа
   */
  featuresStorageService: new (...args: any[]) => FeaturesStorageService;
}

export const FEATURE_TOGGLE_CONFIG_TOKEN =
  new InjectionToken<FeatureToggleConfig>('FEATURE_TOGGLE_CONFIG_TOKEN');

export const FEATURE_TOGGLE_STORAGE_SERVICE_TOKEN =
  new InjectionToken<FeaturesStorageService>(
    'FEATURE_TOGGLE_STORAGE_SERVICE_TOKEN'
  );

@NgModule({
  imports: [CommonModule],
})
export class FeatureToggleModule {
  static forRoot(
    config: FeatureToggleConfig
  ): ModuleWithProviders<FeatureToggleModule> {
    return {
      ngModule: FeatureToggleModule,
      providers: [
        FeatureToggleService,
        {
          provide: FEATURE_TOGGLE_CONFIG_TOKEN,
          useValue: config,
        },
        {
          provide: FEATURE_TOGGLE_STORAGE_SERVICE_TOKEN,
          useExisting: config.featuresStorageService,
        },
      ],
    };
  }
}
