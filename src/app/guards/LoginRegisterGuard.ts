import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { CanActivateFn } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class LoginRegisterGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/dashboard']); // Redirect logged-in users
      return false;
    }
  }
}
