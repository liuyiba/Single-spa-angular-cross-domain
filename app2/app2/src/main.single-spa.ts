import 'core-js/es7/reflect';
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import singleSpaAngular from 'single-spa-angular';
// import webpack from 'webpack';

// __webpack_public_path__ = 'Path/To/Assets/dist/whatever';

if (environment.production) {
  enableProdMode();
}
export default singleSpaAngular({
  bootstrapFunction: () => platformBrowserDynamic().bootstrapModule(AppModule),
  template: '<app2-root />',
  Router,
  NgZone: NgZone,
});