import { TestBed } from '@angular/core/testing';

import { EagerCounterService } from './eager-counter.service';

describe('EagerCounterService', () => {
  let service: EagerCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EagerCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
