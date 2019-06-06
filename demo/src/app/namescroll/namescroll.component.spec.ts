import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamescrollComponent } from './namescroll.component';

describe('NamescrollComponent', () => {
  let component: NamescrollComponent;
  let fixture: ComponentFixture<NamescrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamescrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamescrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
