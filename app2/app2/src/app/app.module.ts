import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { App2SubRouter2Component } from './app2-sub-router2/app2-sub-router2.component';
import { App2SubRouter1Component } from './app2-sub-router1/app2-sub-router1.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    App2SubRouter2Component,
    App2SubRouter1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/app2/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
