import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CONFIG_TOKEN} from './tokens';
import {IAuthModuleConfig} from './interfaces';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthModule {
  constructor(@Optional() @SkipSelf() parentModule: AuthModule) {
    if (parentModule) {
      throw new Error(
        'AuthModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(
    config: IAuthModuleConfig<any>
  ): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        {provide: CONFIG_TOKEN, useExisting: config.authSeviceToken},
      ],
    };
  }
}
