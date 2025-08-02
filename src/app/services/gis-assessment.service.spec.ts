import { TestBed } from '@angular/core/testing';

import { GisAssessmentService } from './gis-assessment.service';

describe('GisAssessmentService', () => {
  let service: GisAssessmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GisAssessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
