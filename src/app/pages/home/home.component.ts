// home.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="sidebar">
      <button routerLink="/login">Login</button>
      <button routerLink="/register">Register</button>
    </div>
    <router-outlet></router-outlet>
  `
})
export class HomeComponent {}
