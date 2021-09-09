import { TestBed } from '@angular/core/testing';

import { SharedCounterService } from './shared-counter.service';

describe('SharedCounterService', () => {
  let service: SharedCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
