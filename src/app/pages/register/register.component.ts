// register.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
      <input formControlName="username" placeholder="Username">
      <input type="password" formControlName="password" placeholder="Password">
      <select formControlName="role">
        <option *ngFor="let r of roles" [value]="r">{{ r }}</option>
      </select>
      <button type="submit">Register</button>
    </form>
  `
})
export class RegisterComponent {
  registerForm: FormGroup;
  roles = ['Engineer', 'Consultant', 'Owner', 'Government'];

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    console.log('Registered:', this.registerForm.value);
  }
}
