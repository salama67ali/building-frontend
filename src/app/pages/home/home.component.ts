import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  template: `
    <div class="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div class="w-full max-w-2xl p-8 text-center bg-white rounded-xl shadow-lg">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-4">
          Welcome to the Building Permissions Management System
        </h1>
        
        <p class="text-lg text-gray-600 mb-8">
          {{ authService.isAuthenticated() ? 'You are logged in.' : 'Please log in or register to get started.' }}
        </p>
        
        <!-- Conditional rendering of links based on authentication status -->
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a *ngIf="!authService.isAuthenticated()" routerLink="/login" 
            class="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Log In
          </a>
          <a *ngIf="!authService.isAuthenticated()" routerLink="/register" 
            class="px-6 py-3 text-lg font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200">
            Register
          </a>
          <a *ngIf="authService.isAuthenticated()" routerLink="/dashboard"
            class="px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors duration-200">
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent {
  authService = inject(AuthService); // Inject the service to check auth state
}