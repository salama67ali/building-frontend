import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// In modern Angular, guards are functional. This is the correct way
// to define a guard for standalone components.
export const AuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if the user is authenticated
  if (authService.isAuthenticated()) {
    return true;
  }

  // If not, redirect to the login page
  router.navigate(['/login']);
  return false;
};
