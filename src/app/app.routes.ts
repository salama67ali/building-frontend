import { provideRouter, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard], pathMatch  : 'full' }, // Add your auth guard here if needed
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] }, // Add your auth guard here if needed
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Add your auth guard here if needed
];

export const appRouter = RouterModule.forRoot(routes);