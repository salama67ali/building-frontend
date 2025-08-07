import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="overview-container">
      <h2>Dashboard Overview</h2>
      
      <div class="quick-actions">
        <mat-card class="action-card" routerLink="/applications/new">
          <mat-icon>add_circle</mat-icon>
          <h3>New Application</h3>
          <p>Start a new building permission application</p>
        </mat-card>
        
        <mat-card class="action-card" routerLink="/applications">
          <mat-icon>list_alt</mat-icon>
          <h3>My Applications</h3>
          <p>View and manage your applications</p>
        </mat-card>
        
        <mat-card class="action-card" routerLink="/profile">
          <mat-icon>account_circle</mat-icon>
          <h3>My Profile</h3>
          <p>Update your personal information</p>
        </mat-card>
      </div>
      
      <div class="recent-activity">
        <h3>Recent Activity</h3>
        <mat-card>
          <p>No recent activity to display</p>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .overview-container {
      padding: 1.5rem;
    }
    
    h2 {
      color: #1f2937;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }
    
    .quick-actions {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .action-card {
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1.5rem 1rem;
    }
    
    .action-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .action-card mat-icon {
      font-size: 3rem;
      width: 3rem;
      height: 3rem;
      margin-bottom: 1rem;
      color: #4f46e5;
    }
    
    .action-card h3 {
      margin: 0.5rem 0;
      color: #1f2937;
      font-size: 1.25rem;
    }
    
    .action-card p {
      color: #6b7280;
      margin: 0;
      font-size: 0.9rem;
    }
    
    .recent-activity h3 {
      color: #1f2937;
      margin: 2rem 0 1rem;
      font-size: 1.25rem;
    }
    
    @media (max-width: 600px) {
      .quick-actions {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class OverviewComponent {}
