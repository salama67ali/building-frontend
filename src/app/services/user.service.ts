import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private baseUrl = 'http://localhost:8050/api/users';

  constructor(private http: HttpClient) {}

  getUsersByRole(role: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/role/${role}`);
  }
}
export interface UserProfileResponse {
  user: UserProfile;
}
export interface UserProfile {
  userId: number;
  name: string;
  email: string;
  role: 'OWNER' | 'CONSULTANT' | 'ENGINEER' | 'BOARD' | 'ADMIN';
}
export interface UserProfileListResponse {
  users: UserProfile[];
}
export interface UserProfileCreate {
  name: string;
  email: string;
  role: 'OWNER' | 'CONSULTANT' | 'ENGINEER' | 'BOARD' | 'ADMIN';
}
export interface UserProfileUpdate {
  userId: number;
  name?: string;
  email?: string;
  role?: 'OWNER' | 'CONSULTANT' | 'ENGINEER' | 'BOARD' | 'ADMIN';
}
export interface UserProfileDelete {
  userId: number;
}