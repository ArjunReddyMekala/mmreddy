import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobslocationComponent } from './jobslocation.component';

describe('JobslocationComponent', () => {
  let component: JobslocationComponent;
  let fixture: ComponentFixture<JobslocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobslocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobslocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
