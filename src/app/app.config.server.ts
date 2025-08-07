import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app.config';

const serverConfig = mergeApplicationConfig(appConfig, {
  providers: [
    provideServerRendering(),
    provideClientHydration(),
    provideAnimations()
  ]
});

export { serverConfig as config };
