import { TestBed } from '@angular/core/testing';

import { LazyCounterService } from './lazy-counter.service';

describe('LazyCounterService', () => {
  let service: LazyCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
