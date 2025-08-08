import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import { UserProfileCreate } from '../../models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registerForm: FormGroup;
  roles = [
    { value: 'Engineer', description: 'Submits technical reports and site assessments' },
    { value: 'Consultant', description: 'Provides compliance advice and documentation' },
    { value: 'Owner', description: 'Initiates project requests and uploads site details' },
    { value: 'Government', description: 'Reviews submissions and issues permits' }
  ];

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    const newUser: UserProfileCreate = this.registerForm.value;
    this.userService.createUser(newUser).subscribe({
      next: user => console.log('User registered:', user),
      error: err => console.error('Registration error:', err)
    });
  }
}
