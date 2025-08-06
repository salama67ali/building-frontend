// src/app/app.component.ts

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Required for <router-outlet>
  template: `
    <div class="app-container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-container {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
  `]
})
export class AppComponent {}
