import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalregComponent } from './referalreg.component';

describe('ReferalregComponent', () => {
  let component: ReferalregComponent;
  let fixture: ComponentFixture<ReferalregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferalregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
