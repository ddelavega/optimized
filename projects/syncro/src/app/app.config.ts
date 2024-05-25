import { ApplicationConfig, provideExperimentalCheckNoChangesForDebug, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { interval } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
  provideExperimentalCheckNoChangesForDebug(
    {
      interval: 1000,
      useNgZoneOnStable: true,
      exhaustive: true
    }
  ),
  provideClientHydration()]
};
