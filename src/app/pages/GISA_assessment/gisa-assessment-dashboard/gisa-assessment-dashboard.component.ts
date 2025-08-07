import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gisa-assessment-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1>GISA Assessment Dashboard</h1>
      </div>
      <div class="dashboard-content">
        <p>Welcome to the GISA assessment dashboard. Here you can conduct and manage GISA assessments.</p>
      </div>
    </div>
  `,
  styleUrls: ['../../../shared/styles/shared-dashboard.css']
})
export class GisaAssessmentDashboardComponent {

}
