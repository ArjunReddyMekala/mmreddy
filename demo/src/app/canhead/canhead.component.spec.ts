import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanheadComponent } from './canhead.component';

describe('CanheadComponent', () => {
  let component: CanheadComponent;
  let fixture: ComponentFixture<CanheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
