import { Component } from '@angular/core';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'aff-introduction',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.less'
})
export class IntroductionComponent {
  featureKeys = `{SOME_KEY_01: true, SOME_KEY_012: true,SOME_KEY_013: true,SOME_KEY_03: true,SOME_KEY_02: true,SOME_KEY_014: true}`;
  moduleInitialization = `
  imports: [
    ...,
    importProvidersFrom(
      FeatureToggleModule.forRoot({
        featuresStorageService: FeatureFlagsStorageService,
        guardFailureUri: '404',
      })
    ),
  ],
  providers: [
    ...,
    FeatureFlagsStorageService,
  ]`;

  guardExample = `
  {{"canMatch: [featureToggleGuard({ key: 'SOME_KEY' })"}}
  {{"canMatch: [featureToggleGuard({ key: 'SOME_KEY', redirectTo: ['404'] })"}}`;

  directiveExample = `
    <a routerLink="/path"
      *appFeatureToggle="'SOME_KEY'; else elseTpl"
    >path</a>

    <ng-template #elseTpl>
      <a routerLink="/new-path"
      >new-path</a>
    </ng-template>
  `;

  serviceExample = `if (this.featureToggleService.isEnabled('SOME_KEY')) {...`;
}
