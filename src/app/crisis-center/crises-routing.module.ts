import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';

const crisesRoutes: Routes = [
  { path: 'crises',  component: CrisisListComponent, data: { animation: 'crises' }},
  { path: 'crisis/:id', component: CrisisDetailComponent, data: { animation: 'crisis' }}
];

@NgModule({
  imports: [
    RouterModule.forChild(crisesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisesRoutingModule { }
