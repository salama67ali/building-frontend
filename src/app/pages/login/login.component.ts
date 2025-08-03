import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
title: any;
loginWithGoogle() {
throw new Error('Method not implemented.');
}
loginWithFacebook() {
throw new Error('Method not implemented.');
}
  loginForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit(): void {
    this.auth.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        console.log('Login success', res);
        this.successMessage = 'Login successful!';
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        console.error('Login failed', err);
        this.errorMessage = 'Invalid credentials';
      },
    });
  }
}
