import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-owner-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterModule],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1>Welcome, {{ ownerName }}</h1>
        <button mat-raised-button color="primary" routerLink="/submit-project">
          <mat-icon>add</mat-icon>
          New Project Application
        </button>
      </div>
      
      <div class="dashboard-cards">
        <mat-card>
          <mat-card-header>
            <mat-card-title>Applications in Progress</mat-card-title>
            <mat-icon>hourglass_empty</mat-icon>
          </mat-card-header>
          <mat-card-content>
            <h2>3</h2>
            <p>Applications currently in review</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button routerLink="/applications">View All</button>
          </mat-card-actions>
        </mat-card>

        <mat-card>
          <mat-card-header>
            <mat-card-title>Approved Applications</mat-card-title>
            <mat-icon>check_circle</mat-icon>
          </mat-card-header>
          <mat-card-content>
            <h2>5</h2>
            <p>Successfully approved applications</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button>View History</button>
          </mat-card-actions>
        </mat-card>

        <mat-card>
          <mat-card-header>
            <mat-card-title>Need Attention</mat-card-title>
            <mat-icon>warning</mat-icon>
          </mat-card-header>
          <mat-card-content>
            <h2>1</h2>
            <p>Applications requiring your action</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="warn">View Details</button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styleUrls: ['./owner-dashboard.component.css']
})
export class OwnerDashboardComponent implements OnInit {
  ownerName: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const user = this.authService.getLoggedInUser();
    if (user) {
      this.ownerName = user.name || 'Owner';
    }
  }

  // Placeholder for fetching data specific to the owner
  fetchOwnerData() {
    console.log('Fetching owner data...');
  }
}
