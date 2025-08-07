import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    SidebarComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <div class="app-container">
      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav #sidenav mode="side" [opened]="isSidebarOpen" class="sidenav">
          <app-sidebar (navigate)="sidenav.toggle()"></app-sidebar>
        </mat-sidenav>
        
        <mat-sidenav-content class="content">
          <mat-toolbar color="primary" class="toolbar">
            <button mat-icon-button (click)="sidenav.toggle()" class="menu-button">
              <mat-icon>menu</mat-icon>
            </button>
            <span class="toolbar-title">Building Permission System</span>
            <span class="spacer"></span>
            <div *ngIf="(authService.user | async) as user" class="user-info">
              <mat-icon>account_circle</mat-icon>
              <span>{{ user.name }}</span>
            </div>
          </mat-toolbar>
          
          <div class="router-outlet-container">
            <router-outlet></router-outlet>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [`
    .app-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    
    .sidenav-container {
      height: 100%;
    }
    
    .sidenav {
      width: 250px;
      box-shadow: 3px 0 6px rgba(0,0,0,0.24);
    }
    
    .content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 2;
    }
    
    .toolbar-title {
      margin-left: 8px;
    }
    
    .spacer {
      flex: 1 1 auto;
    }
    
    .user-info {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-right: 8px;
    }
    
    .router-outlet-container {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
    }
    
    @media (max-width: 768px) {
      .sidenav {
        width: 200px;
      }
      
      .router-outlet-container {
        padding: 10px;
      }
    }
  `]
})
export class AppComponent implements OnInit {
  isSidebarOpen = true;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    // Responsive sidebar
    this.updateSidebarState();
    window.addEventListener('resize', () => this.updateSidebarState());

    this.authService.user.subscribe();
  }

  private updateSidebarState() {
    this.isSidebarOpen = window.innerWidth > 768;
  }
}
