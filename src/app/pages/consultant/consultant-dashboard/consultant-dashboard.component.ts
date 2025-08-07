import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultant-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h1>Consultant Dashboard</h1>
      </div>
      <div class="dashboard-content">
        <p>Welcome to the consultant dashboard. Here you can manage your consultations and provide expert advice.</p>
      </div>
    </div>
  `,
  styleUrls: ['../../../shared/styles/shared-dashboard.css']
})
export class ConsultantDashboardComponent {

}
