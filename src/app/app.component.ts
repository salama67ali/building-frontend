import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  template: `
    <nav class="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div class="flex space-x-4">
        <a routerLink="/" class="hover:text-gray-300">Home</a>
        <a *ngIf="!authService.isAuthenticated()" routerLink="/login" class="hover:text-gray-300">Login</a>
        <a *ngIf="!authService.isAuthenticated()" routerLink="/register" class="hover:text-gray-300">Register</a>
      </div>
      <div *ngIf="authService.isAuthenticated()" class="flex items-center space-x-4">
        <span class="text-sm">Welcome, {{ authService.currentUserValue?.username }}</span>
        <button (click)="authService.logout()" class="px-3 py-1 bg-red-600 rounded hover:bg-red-700">Logout</button>
      </div>
    </nav>
    <main class="main-content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: []
})
export class AppComponent {
  authService = inject(AuthService);
}