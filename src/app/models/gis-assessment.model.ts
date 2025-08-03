export interface GISAssessment {
  assessmentId?: number;
  riskType: string;
  riskLevel: string;
  reportFile: string;
  assessmentDate: Date;
  projectId: number;
}
export interface GISAssessmentResponse {
  assessment: GISAssessment;
}
export interface GISAssessmentListResponse {
  assessments: GISAssessment[];
}
export interface GISAssessmentCreate {
  riskType: string;
  riskLevel: string;
  reportFile: string;
  assessmentDate: Date;
  projectId: number;
}
export interface GISAssessmentUpdate {
  assessmentId: number;
  riskType?: string;
  riskLevel?: string;
  reportFile?: string;
  assessmentDate?: Date;
}
export interface GISAssessmentDelete {
  assessmentId: number;
}
export interface GISAssessmentReport {
  assessmentId: number;
  reportFile: string;
}
export interface GISAssessmentReportResponse {
  assessment: GISAssessment;
}
export interface GISAssessmentProfile {
  assessmentId: number;
  riskType: string;
  riskLevel: string;
  reportFile: string;
  assessmentDate: Date;
  projectId: number;
}
export interface GISAssessmentProfileResponse {
  assessment: GISAssessmentProfile;
}
export interface GISAssessmentProfileUpdate {
  assessmentId: number;
  riskType?: string;
  riskLevel?: string;
  reportFile?: string;
  assessmentDate?: Date;
}
export interface GISAssessmentProfileCreate {
  riskType: string;
  riskLevel: string;
  reportFile: string;
  assessmentDate: Date;
  projectId: number;
}
export interface GISAssessmentProfileDelete {
  assessmentId: number;
}
export interface GISAssessmentProfileListResponse {
  assessments: GISAssessmentProfile[];
}