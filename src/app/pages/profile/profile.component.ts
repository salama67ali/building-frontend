import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-profile',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <!-- template code -->
  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  successMessage: string = '';

  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.profileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['']
    });
  }

  ngOnInit(): void {
    // Populate the form with the current user's data on component initialization
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
      this.profileForm.patchValue({
        username: currentUser.username,
        email: currentUser.email
      });
    }
  }

  onSubmit() {
    this.successMessage = '';
    if (this.profileForm.valid) {
      // Create a payload with only the fields that were changed
      const formValue = this.profileForm.value;
      const payload: any = {};
      if (formValue.username !== this.authService.currentUserValue?.username) {
        payload.username = formValue.username;
      }
      if (formValue.email !== this.authService.currentUserValue?.email) {
        payload.email = formValue.email;
      }
      if (formValue.password) {
        payload.password = formValue.password;
      }

      if (Object.keys(payload).length > 0) {
        this.authService.updateProfile(payload).subscribe({
          next: () => {
            this.successMessage = 'Profile updated successfully!';
            // Clear the password field after a successful update
            this.profileForm.get('password')?.reset();
          },
          error: (err) => {
            console.error('Update failed:', err);
            // Handle error (e.g., show an error message)
          }
        });
      } else {
        this.successMessage = 'No changes to save.';
      }
    }
  }
}