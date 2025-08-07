import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-application',
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
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  isLoading = false;

  applicationTypes = [
    'Residential Building',
    'Commercial Building',
    'Renovation',
    'New Construction',
    'Demolition',
    'Electrical Work',
    'Plumbing Work',
    'Structural Changes'
  ];

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router
  ) {
    this.firstFormGroup = this._formBuilder.group({
      applicationType: ['', Validators.required],
      projectName: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      postalCode: ['', Validators.required],
      plotNumber: ['']
    });

    this.thirdFormGroup = this._formBuilder.group({
      estimatedStartDate: ['', Validators.required],
      estimatedEndDate: [''],
      estimatedCost: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.firstFormGroup.valid && this.secondFormGroup.valid && this.thirdFormGroup.valid) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        this.isLoading = false;
        // Navigate to success page or application list
        this.router.navigate(['/applications']);
      }, 1500);
    }
  }

  onCancel(): void {
    if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
      this.router.navigate(['/applications']);
    }
  }
}
