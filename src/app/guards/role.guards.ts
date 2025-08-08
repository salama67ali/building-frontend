import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// This guard is also converted to a modern functional guard
export const RoleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  // Get the required roles from the route data
  const requiredRoles = route.data['roles'] as string[];

  // Check if the user has the required role
  if (authService.hasRole(requiredRoles)) {
    return true;
  }

  // If not, redirect to a different page (e.g., dashboard)
  router.navigate(['/dashboard']);
  return false;
};