import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(HomeComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch())
  ]
}).catch(err => console.error(err));

