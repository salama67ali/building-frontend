import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav [class.collapsed]="collapsed" class="sidebar" aria-label="Sidebar navigation">
      <ul>
        <li><a routerLink="/dashboard/home" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
          <span class="icon">🏠</span>
          <span *ngIf="!collapsed" class="label">Home</span>
        </a></li>
        <li><a routerLink="/dashboard/profile" routerLinkActive="active">
          <span class="icon">👤</span>
          <span *ngIf="!collapsed" class="label">Profile</span>
        </a></li>
        <li><a routerLink="/dashboard/settings" routerLinkActive="active">
          <span class="icon">⚙️</span>
          <span *ngIf="!collapsed" class="label">Settings</span>
        </a></li>
        <!-- Add more navigation links here -->
      </ul>
    </nav>
  `,
  styles: [`
    .sidebar {
      width: 220px;
      background-color: #2c3e50;
      color: white;
      height: 100vh;
      overflow-y: auto;
      transition: width 0.3s ease;
      padding-top: 1rem;
    }
    .sidebar.collapsed {
      width: 60px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    li {
      margin-bottom: 1rem;
    }
    a {
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      padding: 0.5rem 1rem;
      white-space: nowrap;
    }
    a.active {
      background-color: #34495e;
      border-left: 4px solid #2980b9;
    }
    .icon {
      font-size: 1.25rem;
      width: 24px;
      display: inline-block;
      text-align: center;
      margin-right: 0.75rem;
    }
    .sidebar.collapsed .icon {
      margin-right: 0;
    }
    .label {
      font-size: 1rem;
    }
  `]
})
export class SidebarComponent {
  @Input() collapsed = false;
}
