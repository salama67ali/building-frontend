import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private baseUrl = 'http://localhost:8050/api/projects';

  constructor(private http: HttpClient) {}

  submitProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.baseUrl}/register`, project);
  }

  getProjectsByStatus(status: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/status/${status}`);
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/all`);
  }
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
  ownerId: number;
  consultantId?: number;
  engineerId?: number;
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
export interface ProjectProfileCreate {
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
