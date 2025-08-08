// user.model.ts
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
