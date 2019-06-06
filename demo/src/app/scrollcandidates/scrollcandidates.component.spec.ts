import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollcandidatesComponent } from './scrollcandidates.component';

describe('ScrollcandidatesComponent', () => {
  let component: ScrollcandidatesComponent;
  let fixture: ComponentFixture<ScrollcandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollcandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollcandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
