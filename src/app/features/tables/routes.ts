import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TablePaginatedService} from './pages/table-paginated/table-paginated.service';
import {TableFilterFormService} from './forms/table-filter-form/table-filter-form.service';

const routes: Routes = [
  {
    path: 'default',
    providers: [
      TableFilterFormService,
      TablePaginatedService
    ],
    data: {
      title: 'Table - paginated'
    },
    loadComponent: () => import('@features/tables').then(m => m.TablePaginatedComponent)
  },
  {
    path: 'infinite',
    loadComponent: () => import('@features/tables').then(m => m.TableInfiniteComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {
}
