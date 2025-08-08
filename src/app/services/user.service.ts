import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserProfile, UserProfileListResponse, UserProfileResponse, UserProfileCreate, UserProfileUpdate } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = 'http://localhost:8050/api/users';

  constructor(private http: HttpClient) { }

  createUser(user: UserProfileCreate): Observable<UserProfile> {
    return this.http.post<UserProfile>(this.baseUrl, user).pipe(
      catchError(this.handleError)
    );
  }

  getUsersByRole(role: string): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(`${this.baseUrl}/role/${role}`).pipe(
      catchError(this.handleError)
    );
  }

  getAllUsers(): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(this.baseUrl);
  }

  getUserById(id: number): Observable<UserProfileResponse> {
    return this.http.get<UserProfileResponse>(`${this.baseUrl}/${id}`);
  }

  getUserList(): Observable<UserProfileListResponse> {
    return this.http.get<UserProfileListResponse>(this.baseUrl);
  }

  updateUser(user: UserProfileUpdate): Observable<UserProfile> {
    return this.http.put<UserProfile>(`${this.baseUrl}/${user.userId}`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong. Please try again.'));
  }
}