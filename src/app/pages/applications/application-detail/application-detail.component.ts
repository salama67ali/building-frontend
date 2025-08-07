import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';

interface Application {
  id: string;
  reference: string;
  type: string;
  status: 'draft' | 'submitted' | 'in_review' | 'approved' | 'rejected';
  submittedDate: Date;
  lastUpdated: Date;
  address: string;
  description?: string;
  statusHistory?: {
    status: string;
    date: Date;
    comments?: string;
  }[];
  documents?: {
    name: string;
    type: string;
    uploadedDate: Date;
    size: string;
  }[];
}

@Component({
  selector: 'app-application-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatListModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css']
})
export class ApplicationDetailComponent implements OnInit {
  application: Application | null = null;
  isLoading = true;
  selectedTabIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadApplication();
  }

  private loadApplication(): void {
    this.isLoading = true;
    // Simulate API call with route parameter
    const applicationId = this.route.snapshot.paramMap.get('id');
    
    setTimeout(() => {
      // Mock data - in a real app, you would fetch this from a service
      this.application = {
        id: applicationId || 'app-123',
        reference: `REF-${Math.floor(1000 + Math.random() * 9000)}`,
        type: 'Residential Building',
        status: 'in_review',
        submittedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
        lastUpdated: new Date(),
        address: '123 Main St, City',
        description: 'New residential building with 5 floors',
        statusHistory: [
          { status: 'submitted', date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), comments: 'Application submitted' },
          { status: 'in_review', date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), comments: 'Under review by planning department' },
        ],
        documents: [
          { name: 'Site Plan.pdf', type: 'PDF', uploadedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), size: '2.4 MB' },
          { name: 'Architectural Drawings.pdf', type: 'PDF', uploadedDate: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), size: '5.1 MB' },
          { name: 'Structural Report.pdf', type: 'PDF', uploadedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), size: '1.8 MB' },
        ]
      };
      
      this.isLoading = false;
    }, 1000);
  }

  onEdit(): void {
    if (this.application) {
      this.router.navigate(['/applications', this.application.id, 'edit']);
    }
  }

  onDelete(): void {
    if (confirm('Are you sure you want to delete this application? This action cannot be undone.')) {
      // Simulate delete operation
      this.isLoading = true;
      setTimeout(() => {
        this.snackBar.open('Application deleted successfully', 'Close', { duration: 3000 });
        this.router.navigate(['/applications']);
      }, 1000);
    }
  }

  onStatusChange(newStatus: string): void {
    if (this.application) {
      // Simulate status update
      this.isLoading = true;
      setTimeout(() => {
        if (this.application) {
          this.application.status = newStatus as any;
          this.application.statusHistory?.push({
            status: newStatus,
            date: new Date(),
            comments: `Status changed to ${newStatus}`
          });
          this.snackBar.open(`Status updated to ${newStatus}`, 'Close', { duration: 3000 });
        }
        this.isLoading = false;
      }, 800);
    }
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
