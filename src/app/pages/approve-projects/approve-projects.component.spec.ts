import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveProjectsComponent } from './approve-projects.component';

describe('ApproveProjectsComponent', () => {
  let component: ApproveProjectsComponent;
  let fixture: ComponentFixture<ApproveProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApproveProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
