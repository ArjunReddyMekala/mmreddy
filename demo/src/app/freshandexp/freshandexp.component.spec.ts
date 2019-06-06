import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshandexpComponent } from './freshandexp.component';

describe('FreshandexpComponent', () => {
  let component: FreshandexpComponent;
  let fixture: ComponentFixture<FreshandexpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshandexpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshandexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
