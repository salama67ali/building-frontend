import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project } from '../models/project.model';
// Ensure you have the Project model defined in your models folder


@Injectable({ providedIn: 'root' })
export class ProjectService {
  private baseUrl = 'http://localhost:8050/api/projects'; // ✅ Fixed baseUrl

  constructor(private http: HttpClient) {}

  submitProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.baseUrl}/register`, project).pipe(
      catchError(error => {
        console.error('Error submitting project:', error);
        return throwError(() => new Error('Error submitting project.'));
      })
    );
  }

  getProjectsByStatus(status: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/status/${status}`).pipe(
      catchError(error => {
        console.error('Error getting projects by status:', error);
        return throwError(() => new Error('Error getting projects by status.'));
      })
    );
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.baseUrl}/all`).pipe(
      catchError(error => {
        console.error('Error getting all projects:', error);
        return throwError(() => new Error('Error getting all projects.'));
      })
    );
  }
}
