import { TestBed } from '@angular/core/testing';

import { MarriageServicesService } from './marriage-services.service';

describe('MarriageServicesService', () => {
  let service: MarriageServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarriageServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
