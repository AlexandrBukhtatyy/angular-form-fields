import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'form-field-description',
        loadComponent: () => import('@features/forms').then(m => m.FormFieldDescriptionComponent)
      },
      {
        path: 'composite',
        loadComponent: () => import('@features/forms').then(m => m.CompositeFormComponent)
      },
      {
        path: 'step-by-step',
        loadComponent: () => import('@features/forms').then(m => m.StepByStepFormComponent)
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }