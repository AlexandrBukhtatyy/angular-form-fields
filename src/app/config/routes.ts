import {Routes} from '@angular/router';
import {MainComponent} from '../layouts';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'forms/composite',
        loadComponent: () => import('@features/forms').then(m => m.CompositeFormComponent)
      },
      {
        path: 'forms/step-by-step',

        loadComponent: () => import('@features/forms').then(m => m.StepByStepFormComponent)
      },
      {
        path: 'tables',

        loadComponent: () => import('@features/tables').then(m => m.TablesComponent)
      },
    ]
  },
];
