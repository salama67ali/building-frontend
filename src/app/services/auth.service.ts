import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthResponse } from '../models/authService.model'; // Assuming you have this model defined

// The conflicting import has been removed. The interfaces are now defined correctly here.
// You would use these same interfaces if you create a separate models.ts file later.
export interface User {
  id: number;
  username: string;
  email: string;
  role: 'client' | 'consultant' | 'engineer' | 'government-board' | 'admin';
  token: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Updated apiUrl to match the one you provided.
  private apiUrl = 'http://localhost:8050/api/auth';
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  constructor(private http: HttpClient, private router: Router) {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(
      storedUser ? JSON.parse(storedUser) : null
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  register(userData: any): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/register`, userData)
      .pipe(
        tap(response => {
          console.log('Registration successful:', response);
        }),
        catchError(error => {
          console.error('Registration failed:', error);
          return throwError(() => new Error('Registration failed. Please try again.'));
        })
      );
  }

  login(credentials: any): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/login`, credentials)
      .pipe(
        tap(response => {
          const { user } = response;
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          console.log('Login successful:', user);

          // Redirect to the user's dashboard based on their role
          const userRole = user.role;
          if (userRole === 'admin' || userRole === 'government-board') {
            this.router.navigate(['/admin-dashboard']);
          } else if (['client', 'consultant', 'engineer'].includes(userRole)) {
            this.router.navigate(['/dashboard']);
          } else {
            console.error('Unknown user role:', userRole);
            // Handle unknown user role
          }
        }),
        catchError(error => {
          console.error('Login failed:', error);
          return throwError(() => new Error('Login failed. Invalid credentials.'));
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  hasRole(requiredRoles: string[]): boolean {
    if (!Array.isArray(requiredRoles)) {
      console.error('Required roles must be an array:', requiredRoles);
      return false;
    }
    const user = this.currentUserSubject.value;
    if (!user) {
      return false;
    }
    return requiredRoles.includes(user.role);
  }

  // This is a placeholder for a real API call to update user data.
  // In a real application, you would send a PATCH or PUT request to your backend.
  updateProfile(userData: Partial<User>): Observable<any> {
    // Replace this with a real API call
    console.log('Updating profile for user:', userData);
    return this.http.patch(`${this.apiUrl}/update-profile`, userData);
  }
}