import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { SubRouter1Component } from './sub-router1/sub-router1.component';
import { APP_BASE_HREF } from '@angular/common';
import { SubRouter2Component } from './sub-router2/sub-router2.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    SubRouter1Component,
    SubRouter2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/app1/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
