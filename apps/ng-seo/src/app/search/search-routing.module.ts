import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchItemComponent } from './search-item.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: ':id',
    component: SearchItemComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
