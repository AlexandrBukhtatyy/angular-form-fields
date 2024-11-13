import {Routes} from '@angular/router';
import {CompositeFormComponent, StepByStepFormComponent} from '@features/forms';
import {TablesComponent} from '@features/tables';

export const routes: Routes = [
  {path: 'forms/composite', component: CompositeFormComponent},
  {path: 'forms/step-by-step', component: StepByStepFormComponent},
  {path: 'tables', component: TablesComponent},
];
