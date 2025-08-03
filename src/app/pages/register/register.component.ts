import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      role: ['OWNER']
    });
  }

  onSubmit(): void {
    this.auth.register(this.registerForm.value).subscribe({
      next: (res: any) => {
        console.log('Registration success', res);
        this.successMessage = 'Registration successful!';
        this.router.navigate(['/login']);
      },
      error: (err: any) => {
        console.error('Registration failed', err);
        this.errorMessage = 'Something went wrong';
      },
    });
  }
}
