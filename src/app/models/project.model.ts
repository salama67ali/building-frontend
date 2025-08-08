
export interface UserInfo {
  userId: number;
  name: string;
  email: string;
  role: string;
}

export interface Project {
  projectId?: number; // optional when submitting
  name: string;
  address: string;
  status: string;
  submissionDate: string; // ISO string
  torDocument: string;
  buildingPlan: string;
  latitude: number;
  longitude: number;

  // Foreign key IDs for submission
  ownerId?: number;
  consultantId?: number;
  engineerId?: number;

  // Expanded user objects returned from backend
  owner?: UserInfo;
  consultant?: UserInfo;
  engineer?: UserInfo;

  // Assessment fields (optional)
  riskType?: string;
  riskLevel?: string;
  reportFile?: string;
  assessmentDate?: string;
}
export interface ProjectResponse {
  project: Project;
}
export interface ProjectListResponse {
  projects: Project[];
}
export interface ProjectCreate {
  name: string;
  address: string;
  status: string;
  submissionDate: string; // ISO string
  torDocument: string;
  buildingPlan: string;
  latitude: number;
  longitude: number;

  // Foreign key IDs for submission
  ownerId?: number;
  consultantId?: number;
  engineerId?: number;
}
export interface ProjectUpdate {
  projectId: number;
  name?: string;
  address?: string;
  status?: string;
  submissionDate?: string; // ISO string
  torDocument?: string;
  buildingPlan?: string;
  latitude?: number;
  longitude?: number;

  // Foreign key IDs for submission
  ownerId?: number;
  consultantId?: number;
  engineerId?: number;

  // Assessment fields (optional)
  riskType?: string;
  riskLevel?: string;
  reportFile?: string;
  assessmentDate?: string; // ISO string
}
export interface ProjectDelete {
  projectId: number;
}
export interface ProjectStatusUpdate {
  projectId: number;
  status: string; // e.g., 'PENDING', 'APPROVED', 'REJECTED'
}
export interface ProjectStatusResponse {
  projectId: number;
  status: string; // e.g., 'PENDING', 'APPROVED', 'REJECTED'
}
export interface ProjectSearchCriteria {
  name?: string;
  address?: string;
  status?: string;
  submissionDateFrom?: string; // ISO string
  submissionDateTo?: string; // ISO string
  ownerId?: number;
  consultantId?: number;
  engineerId?: number;
}
export interface ProjectSearchResponse {
  projects: Project[];
}
export interface ProjectFilter {
  status?: string; // e.g., 'PENDING', 'APPROVED', 'REJECTED'
  ownerId?: number;
  consultantId?: number;
  engineerId?: number;
  submissionDateFrom?: string; // ISO string
  submissionDateTo?: string; // ISO string
}
export interface ProjectFilterResponse {
  projects: Project[];
}
export interface ProjectStatistics {
  totalProjects: number;
  pendingProjects: number;
  approvedProjects: number;
  rejectedProjects: number;
  projectsByStatus: { [status: string]: number };
}
export interface ProjectStatisticsResponse {
  statistics: ProjectStatistics;
}
export interface ProjectNotification {
  projectId: number;
  message: string;
  timestamp: string; // ISO string
}
export interface ProjectNotificationResponse {
  notifications: ProjectNotification[];
}
export interface ProjectNotificationCreate {
  projectId: number;
  message: string;
}
export interface ProjectNotificationUpdate {
  notificationId: number;
  message?: string;
}
export interface ProjectNotificationDelete {
  notificationId: number;
}
export interface ProjectNotificationListResponse {
  notifications: ProjectNotification[];
}
export interface ProjectNotificationCreateResponse {
  notification: ProjectNotification;
}

export interface ProjectNotificationUpdateResponse {
  notification: ProjectNotification;
}
