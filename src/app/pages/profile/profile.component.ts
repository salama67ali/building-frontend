import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
  role: string;
  company?: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  isEditing = false;
  isLoading = false;
  user: UserProfile | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {
    this.profileForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      company: [''],
      address: [''],
      city: [''],
      country: [''],
      postalCode: ['']
    });
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  private loadUserProfile(): void {
    this.isLoading = true;
    // Simulate API call
    setTimeout(() => {
      // In a real app, you would get this from your auth service
      const currentUser = this.authService.getLoggedInUser();
      if (currentUser) {
        this.user = {
          fullName: currentUser.fullName || 'John Doe',
          email: currentUser.email || 'john.doe@example.com',
          phone: currentUser.phone || '+1 234 567 8900',
          role: currentUser.role || 'owner',
          company: 'ACME Inc.',
          address: '123 Main St',
          city: 'Nairobi',
          country: 'Kenya',
          postalCode: '00100'
        };
        
        this.profileForm.patchValue(this.user);
      }
      this.isLoading = false;
    }, 1000);
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
    if (this.isEditing) {
      this.profileForm.enable();
    } else {
      this.profileForm.disable();
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.user = { ...this.user, ...this.profileForm.value };
        this.isEditing = false;
        this.profileForm.disable();
        this.isLoading = false;
        this.showSuccess('Profile updated successfully');
      }, 1000);
    }
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

  get fullName() { return this.profileForm.get('fullName'); }
  get email() { return this.profileForm.get('email'); }
  get phone() { return this.profileForm.get('phone'); }
}
