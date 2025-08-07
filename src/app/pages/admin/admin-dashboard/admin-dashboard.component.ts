import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1>Admin Dashboard</h1>
      </div>
      <div class="dashboard-content">
        <p>Welcome to the admin dashboard. Here you can manage users, approve projects, and oversee the application.</p>
      </div>
    </div>
  `,
  styleUrls: ['../../../shared/styles/shared-dashboard.css']
})
export class AdminDashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
