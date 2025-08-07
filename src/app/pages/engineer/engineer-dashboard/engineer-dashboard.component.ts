import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-engineer-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1>Engineer Dashboard</h1>
      </div>
      <div class="dashboard-content">
        <p>Welcome to the engineer dashboard. Here you can manage your assigned projects and review technical details.</p>
      </div>
    </div>
  `,
  styleUrls: ['../../../shared/styles/shared-dashboard.css']
})
export class EngineerDashboardComponent {

}
