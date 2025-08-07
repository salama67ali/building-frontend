import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

interface Application {
  id: string;
  reference: string;
  type: string;
  status: 'draft' | 'submitted' | 'in_review' | 'approved' | 'rejected';
  submittedDate: Date;
  lastUpdated: Date;
  address: string;
}

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {
  displayedColumns: string[] = ['reference', 'type', 'status', 'submittedDate', 'actions'];
  applications: Application[] = [];
  isLoading = true;
  
  // Pagination
  pageSize = 10;
  pageIndex = 0;
  totalItems = 0;

  constructor() {}

  ngOnInit(): void {
    this.loadApplications();
  }

  private loadApplications(): void {
    this.isLoading = true;
    // Simulate API call
    setTimeout(() => {
      this.applications = this.generateMockApplications();
      this.totalItems = 25; // Mock total count
      this.isLoading = false;
    }, 1000);
  }

  private generateMockApplications(): Application[] {
    const types = ['Residential', 'Commercial', 'Renovation', 'New Construction', 'Demolition'];
    const statuses: ('draft' | 'submitted' | 'in_review' | 'approved' | 'rejected')[] = 
      ['draft', 'submitted', 'in_review', 'approved', 'rejected'];
    
    return Array(10).fill(0).map((_, i) => ({
      id: `app-${i + 1}`,
      reference: `REF-${1000 + i}`,
      type: types[Math.floor(Math.random() * types.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      submittedDate: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
      lastUpdated: new Date(),
      address: `${Math.floor(Math.random() * 1000) + 1} Main St, City`
    }));
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadApplications();
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'approved': return 'status-approved';
      case 'rejected': return 'status-rejected';
      case 'in_review': return 'status-review';
      case 'submitted': return 'status-submitted';
      case 'draft': return 'status-draft';
      default: return '';
    }
  }

  getStatusLabel(status: string): string {
    return status.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }
}
