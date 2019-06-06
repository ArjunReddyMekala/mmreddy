import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MservicesComponent } from './mservices.component';

describe('MservicesComponent', () => {
  let component: MservicesComponent;
  let fixture: ComponentFixture<MservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
