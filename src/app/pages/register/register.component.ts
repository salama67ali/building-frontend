import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatIconModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(300)
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  hidePassword = true;
  hideConfirmPassword = true;
  roles = [
    { value: 'ENGINEER', viewValue: 'Engineer' },
    { value: 'CONSULTANT', viewValue: 'Consultant' },
    { value: 'OWNER', viewValue: 'Property Owner' },
    { value: 'GOVERNMENT', viewValue: 'Government Official' }
  ];
  
  // Form control getters for template
  get formControls() {
    return this.registerForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: [''],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    }, { validators: [this.passwordMatchValidator] });
  }

  ngOnInit(): void {
    // If user is already logged in, redirect to dashboard
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
      return { mismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.invalid || this.isLoading) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const formValue = this.registerForm.value;
    const userData = {
      username: formValue.username,
      email: formValue.email,
      password: formValue.password,
      role: formValue.role,
      firstName: formValue.firstName,
      lastName: formValue.lastName || '',
      phone: formValue.phone
    };

    this.authService.register(userData)
      .pipe(first())
      .subscribe({
        next: () => {
          this.isLoading = false;
          this.successMessage = 'Registration successful! Redirecting to login...';
          
          this.snackBar.open('Registration successful! Please log in.', 'Close', {
            duration: 5000,
            panelClass: ['success-snackbar']
          });
          
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
        error: (error) => {
          this.isLoading = false;
          this.errorMessage = error.message || 'Registration failed. Please try again.';
          this.snackBar.open(this.errorMessage, 'Close', {
            duration: 5000,
            panelClass: ['error-snackbar']
          });
        }
      });
  }

  // Individual form control getters for template
  get username() { return this.registerForm.get('username'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }
  get role() { return this.registerForm.get('role'); }
  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get phone() { return this.registerForm.get('phone'); }
}
