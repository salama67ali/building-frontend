import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token');

    // Only allow unauthenticated users to access login/register
    if (route.data['expectedRole'] === 'guest' && token) {
      this.router.navigate(['/dashboard']);
      return false;
    }

    return true;
  }
}
