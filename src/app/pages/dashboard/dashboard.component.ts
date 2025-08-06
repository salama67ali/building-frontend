// dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Welcome to the Dashboard</h1>
    <button routerLink="/">Back to Home</button>
  `
})
export class DashboardComponent {}
