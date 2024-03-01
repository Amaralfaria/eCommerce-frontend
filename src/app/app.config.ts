import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ContentHeaderInterceptorService } from './core/interceptors/content-header-interceptor.service'

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), {
      provide: HTTP_INTERCEPTORS,
      useClass: ContentHeaderInterceptorService,
      multi: true
    }]
};
