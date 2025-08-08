import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // define your rou[
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [AuthGuard], pathMatch  : 'full' }, // Add your auth guard here if needed
    { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] }, // Add your auth guard here if needed
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Add your auth guard here if needed
  ];
  
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch())
  ]
});