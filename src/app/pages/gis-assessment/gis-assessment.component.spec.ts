import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisAssessmentComponent } from './gis-assessment.component';

describe('GisAssessmentComponent', () => {
  let component: GisAssessmentComponent;
  let fixture: ComponentFixture<GisAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GisAssessmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GisAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
