import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.getLoggedInUser();
  const expectedRole = route.data['expectedRole'];

  if (!user || user.role !== expectedRole) {
    // Redirect to a default or error page if the role doesn't match
    return router.parseUrl('/dashboard');
  }

  return true;
};

export const dashboardRedirectGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.getLoggedInUser();

  if (user) {
    if (user.role === 'admin') {
      return router.parseUrl('/dashboard/admin');
    } else if (user.role === 'owner') {
      return router.parseUrl('/dashboard/owner');
    } else if (user.role === 'consultant') {
      return router.parseUrl('/dashboard/consultant');
    } else if (user.role === 'engineer') {
      return router.parseUrl('/dashboard/engineer');
    } else if (user.role === 'GISA_assessment') {
      return router.parseUrl('/dashboard/gisa-assessment');
    } else if (user.role === 'government_boards') {
      return router.parseUrl('/dashboard/government-boards');
    }
  }

  // If no user or role, redirect to login
  return router.parseUrl('/login');
};
