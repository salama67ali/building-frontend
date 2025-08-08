import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile, UserProfileCreate, UserProfileUpdate, UserProfileResponse, UserProfileListResponse } from '../models/user.model';
import { AuthResponse, User } from '../models/authService.model'; // Assuming you have this model defined
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
export class User {
  // Define the properties and methods of the User class
}
export interface UserProfile {
  userId: number;
  name: string;
  email: string;
  role: 'OWNER' | 'CONSULTANT' | 'ENGINEER' | 'BOARD' | 'ADMIN';
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
export interface UserProfileResponse {
  user: UserProfile;
}
export interface UserProfileListResponse {
  users: UserProfile[];
}
export interface User {
  userId: number;
  username: string;
  email: string;
  role: 'OWNER' | 'CONSULTANT' | 'ENGINEER' | 'BOARD' | 'ADMIN';
}
export interface AuthResponse {
  user: User;
  token: string;
}
export interface AuthService {
  register(userData: any): Observable<AuthResponse>;
  login(credentials: any): Observable<AuthResponse>;
  logout(): void;
  updateProfile(userData: Partial<User>): Observable<any>;
  currentUserValue: User | null;
}
