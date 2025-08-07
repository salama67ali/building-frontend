import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviewer-dashboard',
  templateUrl: './reviewer-dashboard.component.html',
  styleUrls: ['./reviewer-dashboard.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ReviewerDashboardComponent {
  constructor() { }
}
