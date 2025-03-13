import {Routes} from '@angular/router';
import {MainComponent} from '../layouts';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'feature-toggle',
        loadChildren: () => import('@features/feature-toggle').then(m => m.FeatureToggleRoutingModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('@features/forms').then(m => m.FormsRoutingModule)
      },
      {
        path: 'forms-generation',
        loadChildren: () => import('@features/forms-generation').then(m => m.FormsGenerationRoutingModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('@features/tables').then(m => m.TablesRoutingModule)
      },
    ]
  },
];
