import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  template: `
    <div class="dashboard-layout" role="main">
      <app-sidebar [collapsed]="sidebarCollapsed"></app-sidebar>
      <div class="content-area">
        <header class="dashboard-header">
          <button class="toggle-btn" (click)="toggleSidebar()" aria-label="Toggle sidebar" [class.collapsed]="sidebarCollapsed">
            ☰
          </button>
          <h1 class="dashboard-title">Dashboard</h1>
          <!-- You can add user profile or notifications here -->
        </header>
        <main class="dashboard-main-content" tabindex="0">
          <router-outlet></router-outlet>
        </main>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
    .dashboard-layout {
      display: flex;
      height: 100%;
      background-color: #f5f7fa;
      color: #333;
    }
    app-sidebar {
      transition: width 0.3s ease;
      background-color: #2c3e50;
      color: white;
      height: 100vh;
      overflow: auto;
    }
    .content-area {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    .dashboard-header {
      background-color: #34495e;
      color: white;
      padding: 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .toggle-btn {
      font-size: 1.5rem;
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      user-select: none;
    }
    .toggle-btn:focus {
      outline: 2px solid #2980b9;
      outline-offset: 2px;
    }
    .dashboard-title {
      margin: 0;
      font-weight: 600;
      font-size: 1.25rem;
    }
    .dashboard-main-content {
      flex-grow: 1;
      overflow-y: auto;
      padding: 1rem;
      background-color: white;
      outline: none;
    }
    @media (max-width: 768px) {
      .dashboard-layout {
        flex-direction: column;
      }
      app-sidebar {
        width: 100%;
        height: auto;
      }
      .content-area {
        height: auto;
      }
    }
  `]
})
export class DashboardComponent {
  sidebarCollapsed = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    this.sidebarCollapsed = width < 768; // Collapse sidebar on small screens
  }
}
