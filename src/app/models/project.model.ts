import { User } from './user.model';

export interface Project {
  projectId?: number;
  name: string;
  status: string;
  submissionDate: Date;
  torDocument: string;
  buildingPlan: string;
  address: string;
  latitude: number;
  longitude: number;
  owner: User;
  consultant: User;
  engineer: User;
  riskType?: string;
  riskLevel?: string;
  reportFile?: string;
  assessmentDate?: Date;
}
export interface ProjectResponse {
  project: Project;
}
export interface ProjectListResponse {
  projects: Project[];
}
export interface ProjectCreate {
  name: string;
  status: string;
  submissionDate: Date;
  torDocument: string;
  buildingPlan: string;
  address: string;
  latitude: number;
  longitude: number;
  ownerId: number;
  consultantId?: number;
  engineerId?: number;
  riskType?: string;
  riskLevel?: string;
}
export interface ProjectUpdate {
  projectId: number;
  name?: string;
  status?: string;
  submissionDate?: Date;
  torDocument?: string;
  buildingPlan?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  ownerId?: number;
  consultantId?: number;
  engineerId?: number;
  riskType?: string;
  riskLevel?: string;
}
export interface ProjectDelete {
  projectId: number;
}
export interface ProjectReport {
  projectId: number;
  reportFile: string;
}
export interface ProjectReportResponse {
  project: Project;
}
export interface ProjectProfile {
  projectId: number;
  name: string;
  status: string;
  submissionDate: Date;
  torDocument: string;
  buildingPlan: string;
  address: string;
  latitude: number;
  longitude: number;
  owner: User;
  consultant?: User;
  engineer?: User;
  riskType?: string;
  riskLevel?: string;
}
export interface ProjectProfileResponse {
  project: ProjectProfile;
}
export interface ProjectProfileUpdate {
  projectId: number;
  name?: string;
  status?: string;
  submissionDate?: Date;
  torDocument?: string;
  buildingPlan?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  ownerId?: number;
  consultantId?: number;
  engineerId?: number;
  riskType?: string;
  riskLevel?: string;
}
export interface ProjectProfileDelete {
  projectId: number;
}