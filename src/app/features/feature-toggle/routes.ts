import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'introduction',
      loadComponent: () => import('@features/feature-toggle').then(m => m.IntroductionComponent)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureToggleRoutingModule { }