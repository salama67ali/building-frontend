import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-government-boards-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1>Government Boards Dashboard</h1>
      </div>
      <div class="dashboard-content">
        <p>Welcome to the government boards dashboard. Here you can review applications and make board-level decisions.</p>
      </div>
    </div>
  `,
  styleUrls: ['../../../shared/styles/shared-dashboard.css']
})
export class GovernmentBoardsDashboardComponent {

}
