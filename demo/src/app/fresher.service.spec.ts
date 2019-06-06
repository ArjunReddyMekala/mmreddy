import { TestBed } from '@angular/core/testing';

import { FresherService } from './fresher.service';

describe('FresherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FresherService = TestBed.get(FresherService);
    expect(service).toBeTruthy();
  });
});
