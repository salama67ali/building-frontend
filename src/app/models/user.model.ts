export interface UserProfileCreate {
  name: string;
  email: string;
  password: string;
  role: string;
}
export interface UserProfileUpdate {
  userId: number;
  name?: string;
  email?: string;
  role?: string;
}