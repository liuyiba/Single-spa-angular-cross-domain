import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { SubRouter1Component } from './sub-router1/sub-router1.component';
import { SubRouter2Component } from './sub-router2/sub-router2.component';

const routes: Routes = [
  // { path: '**', component: EmptyRouteComponent },
  { path: 'subRouter1', component: SubRouter1Component },
  { path: 'subRouter2', component: SubRouter2Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
