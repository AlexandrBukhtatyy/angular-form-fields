import {Routes} from '@angular/router';
import {CompositeFormComponent} from '@features/forms';
import {TablesComponent} from '@features/tables';

export const routes: Routes = [
  {path: 'forms', component: CompositeFormComponent},
  {path: 'tables', component: TablesComponent},
]
