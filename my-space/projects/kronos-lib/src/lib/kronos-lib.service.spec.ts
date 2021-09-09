import { TestBed } from '@angular/core/testing';

import { KronosLibService } from './kronos-lib.service';

describe('KronosLibService', () => {
  let service: KronosLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KronosLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
