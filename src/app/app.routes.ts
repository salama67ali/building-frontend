import { inject } from '@angular/core';
import { Routes, Router } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';
import { HomeComponent } from './pages/home/home.component';
import { AuthService } from './services/auth.service';

export const appRoutes: Routes = [
  // Public routes
  { 
    path: 'home', 
    component: HomeComponent,
    title: 'Home | Building Permissions'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent),
    title: 'Login | Building Permissions',
    canActivate: [() => {
      const authService = inject(AuthService);
      if (authService.getLoggedInUser()) {
        const router = inject(Router);
        return router.parseUrl('/dashboard');
      }
      return true;
    }]
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent),
    title: 'Register | Building Permissions',
    canActivate: [() => {
      const authService = inject(AuthService);
      if (authService.getLoggedInUser()) {
        const router = inject(Router);
        return router.parseUrl('/dashboard');
      }
      return true;
    }]
  },
  
  // Protected routes
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    canActivate: [authGuard],
    title: 'Dashboard | Building Permissions',
    children: [
      {
        path: 'admin',
        loadComponent: () => import('./pages/admin/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
        canActivate: [roleGuard],
        data: { expectedRole: 'admin' },
        title: 'Admin Dashboard | Building Permissions'
      },
      {
        path: 'owner',
        loadComponent: () => import('./pages/owner/owner-dashboard/owner-dashboard.component').then(m => m.OwnerDashboardComponent),
        canActivate: [roleGuard],
        data: { expectedRole: 'owner' },
        title: 'Owner Dashboard | Building Permissions'
      },
      {
        path: 'consultant',
        loadComponent: () => import('./pages/consultant/consultant-dashboard/consultant-dashboard.component').then(m => m.ConsultantDashboardComponent),
        canActivate: [roleGuard],
        data: { expectedRole: 'consultant' },
        title: 'Consultant Dashboard | Building Permissions'
      },
      {
        path: 'engineer',
        loadComponent: () => import('./pages/engineer/engineer-dashboard/engineer-dashboard.component').then(m => m.EngineerDashboardComponent),
        canActivate: [roleGuard],
        data: { expectedRole: 'engineer' },
        title: 'Engineer Dashboard | Building Permissions'
      },
      {
        path: 'gisa-assessment',
        loadComponent: () => import('./pages/GISA_assessment/gisa-assessment-dashboard/gisa-assessment-dashboard.component').then(m => m.GisaAssessmentDashboardComponent),
        canActivate: [roleGuard],
        data: { expectedRole: 'GISA_assessment' },
        title: 'GISA Assessment | Building Permissions'
      },
      {
        path: 'government-boards',
        loadComponent: () => import('./pages/government_boards/government-boards-dashboard/government-boards-dashboard.component').then(m => m.GovernmentBoardsDashboardComponent),
        canActivate: [roleGuard],
        data: { expectedRole: 'government_boards' },
        title: 'Government Boards | Building Permissions'
      },
      { 
        path: '', 
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'overview',
        loadComponent: () => import('./pages/dashboard/overview/overview.component').then(m => m.OverviewComponent),
        title: 'Overview | Dashboard',
        canActivate: [authGuard]
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
        title: 'My Profile | Building Permissions',
        canActivate: [authGuard]
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent),
        title: 'Settings | Building Permissions',
        canActivate: [authGuard]
      }
    ]
  },
  
  // Application routes
  {
    path: 'applications',
    canActivate: [authGuard],
    children: [
      {
        path: 'new',
        loadComponent: () => import('./pages/applications/new-application/new-application.component').then(m => m.NewApplicationComponent),
        title: 'New Application | Building Permissions'
      },
      {
        path: ':id',
        loadComponent: () => import('./pages/applications/application-detail/application-detail.component').then(m => m.ApplicationDetailComponent),
        title: 'Application Details | Building Permissions'
      },
      {
        path: '',
        loadComponent: () => import('./pages/applications/application-list/application-list.component').then(m => m.ApplicationListComponent),
        title: 'My Applications | Building Permissions'
      }
    ]
  },
  
  // Default and wildcard routes
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: 'not-found',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Page Not Found | Building Permissions'
  },
  { 
    path: '**', 
    redirectTo: '/not-found' 
  }
];
