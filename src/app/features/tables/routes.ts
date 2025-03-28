import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'default',
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
