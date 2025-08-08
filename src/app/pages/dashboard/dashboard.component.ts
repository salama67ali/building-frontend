import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Welcome to the Dashboard</h1>
    <button (click)="logout()">Logout</button>
  `
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}