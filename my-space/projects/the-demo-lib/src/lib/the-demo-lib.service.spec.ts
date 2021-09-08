import { TestBed } from '@angular/core/testing';

import { TheDemoLibService } from './the-demo-lib.service';

describe('TheDemoLibService', () => {
  let service: TheDemoLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheDemoLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
