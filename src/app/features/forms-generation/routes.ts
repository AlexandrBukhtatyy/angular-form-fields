import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'simple-form',
    loadComponent: () => import('@features/forms-generation').then(m => m.SimpleFormGenerationComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsGenerationRoutingModule {
}
