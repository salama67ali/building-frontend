export interface User {
  userId?: number;
  name: string;
  email: string;
  password?: string;
  role: 'OWNER' | 'CONSULTANT' | 'ENGINEER' | 'BOARD' | 'ADMIN';
}
export interface UserResponse {
  user: User;
  token: string;
}
export interface UserListResponse {
  users: User[];
}
export interface UserUpdate {
  userId: number;
  name?: string;
  email?: string;
  password?: string;
  role?: 'OWNER' | 'CONSULTANT' | 'ENGINEER' | 'BOARD' | 'ADMIN';
}
export interface UserCreate {
  name: string;
  email: string;
  password: string;
  role: 'OWNER' | 'CONSULTANT' | 'ENGINEER' | 'BOARD' | 'ADMIN';
}
export interface UserDelete {
  userId: number;
}
export interface UserLogin {
  email: string;
  password: string;
}
export interface UserChangePassword {
  userId: number;
  oldPassword: string;
  newPassword: string;
}
export interface UserForgotPassword {
  email: string;
}
export interface UserResetPassword {
  token: string;
  newPassword: string;
}
export interface UserProfile {
  userId: number;
  name: string;
  email: string;
  role: 'OWNER' | 'CONSULTANT' | 'ENGINEER' | 'BOARD' | 'ADMIN';
}
export interface UserProfileResponse {
  user: UserProfile;
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
export interface UserProfileChangePassword {
  userId: number;
  oldPassword: string;
  newPassword: string;
}