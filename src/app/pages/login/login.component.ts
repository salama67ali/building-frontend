import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { fadeInOut, slideIn } from '../../shared/animations/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [fadeInOut, slideIn]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hidePassword = true;
  isLoading = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService, 
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  // Convenience getters for form controls
  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }
  get rememberMe() { return this.loginForm.get('rememberMe'); }

  ngOnInit() {
    this.checkRememberedUser();
  }

  private checkRememberedUser() {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      this.loginForm.patchValue({
        username: rememberedUser,
        rememberMe: true
      });
    }
  }

  onSubmit() {
    if (this.loginForm.invalid || this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    
    const { username, password, rememberMe } = this.loginForm.value;

    this.authService.login(username, password).subscribe({
      next: (response) => {
        this.handleLoginSuccess(username, rememberMe, response.role);
      },
      error: (error) => {
        this.handleLoginError(error);
      }
    });
  }

  private handleLoginSuccess(username: string, rememberMe: boolean, role: string) {
    this.isLoading = false;
    
    // Update remember me preference
    if (rememberMe) {
      localStorage.setItem('rememberedUser', username);
    } else {
      localStorage.removeItem('rememberedUser');
    }
    
    // Navigate based on role
    this.navigateAfterLogin(role);
  }

  private handleLoginError(error: any) {
    this.isLoading = false;
    this.errorMessage = this.getErrorMessage(error);
    
    // Clear password field on error
    this.loginForm.get('password')?.reset();
  }

  private getErrorMessage(error: any): string {
    if (error.status === 401) {
      return 'Invalid username or password. Please try again.';
    } else if (error.status === 0) {
      return 'Unable to connect to the server. Please check your internet connection.';
    } else {
      return error.error?.message || 'An unexpected error occurred. Please try again later.';
    }
  }

  private navigateAfterLogin(role: string) {
    const targetRoute = role === 'admin' ? '/admin/dashboard' : '/dashboard';
    this.router.navigate([targetRoute]);
  }

  loginWithGoogle() {
    this.isLoading = true;
    // Implement Google OAuth integration
    console.log('Google login clicked');
    // this.authService.loginWithGoogle().subscribe({
    //   next: (response) => this.handleLoginSuccess(response.username, false, response.role),
    //   error: (error) => this.handleLoginError(error)
    // });
  }

  loginWithMicrosoft() {
    this.isLoading = true;
    // Implement Microsoft OAuth integration
    console.log('Microsoft login clicked');
    // this.authService.loginWithMicrosoft().subscribe({
    //   next: (response) => this.handleLoginSuccess(response.username, false, response.role),
    //   error: (error) => this.handleLoginError(error)
    // });
  }
}
