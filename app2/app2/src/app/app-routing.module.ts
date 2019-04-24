import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { App2SubRouter1Component } from './app2-sub-router1/app2-sub-router1.component';
import { App2SubRouter2Component } from './app2-sub-router2/app2-sub-router2.component';

const routes: Routes = [
  { path: 'subRouter1', component: App2SubRouter1Component },
  { path: 'subRouter2', component: App2SubRouter2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
