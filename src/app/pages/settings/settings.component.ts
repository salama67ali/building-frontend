import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../services/auth.service';

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  applicationUpdates: boolean;
  deadlineReminders: boolean;
  newsletter: boolean;
}

interface PrivacySettings {
  profileVisibility: 'public' | 'private';
  showEmail: boolean;
  showPhone: boolean;
  showCompany: boolean;
}

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  notificationForm: FormGroup;
  privacyForm: FormGroup;
  isLoading = false;
  currentTheme: 'light' | 'dark' = 'light';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.notificationForm = this.fb.group({
      emailNotifications: [true],
      pushNotifications: [true],
      applicationUpdates: [true],
      deadlineReminders: [true],
      newsletter: [true]
    });

    this.privacyForm = this.fb.group({
      profileVisibility: ['public'],
      showEmail: [false],
      showPhone: [false],
      showCompany: [true]
    });
  }

  ngOnInit(): void {
    this.loadSettings();
  }

  private loadSettings(): void {
    this.isLoading = true;
    // Simulate API call to load settings
    setTimeout(() => {
      // In a real app, you would get these from your settings service
      const notificationSettings: NotificationSettings = {
        emailNotifications: true,
        pushNotifications: true,
        applicationUpdates: true,
        deadlineReminders: true,
        newsletter: true
      };

      const privacySettings: PrivacySettings = {
        profileVisibility: 'public',
        showEmail: false,
        showPhone: false,
        showCompany: true
      };

      this.notificationForm.patchValue(notificationSettings);
      this.privacyForm.patchValue(privacySettings);
      
      // Load theme preference
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      this.currentTheme = savedTheme || 'light';
      this.applyTheme(this.currentTheme);
      
      this.isLoading = false;
    }, 800);
  }

  saveNotificationSettings(): void {
    if (this.notificationForm.valid) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        this.showSuccess('Notification settings saved successfully');
      }, 1000);
    }
  }

  savePrivacySettings(): void {
    if (this.privacyForm.valid) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        this.showSuccess('Privacy settings saved successfully');
      }, 1000);
    }
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  changePassword(): void {
    // Implement password change functionality
    this.showInfo('Password change functionality coming soon');
  }

  private showSuccess(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  private showInfo(message: string): void {
    this.snackBar.open(message, 'OK', {
      duration: 3000,
      panelClass: ['info-snackbar']
    });
  }
}
