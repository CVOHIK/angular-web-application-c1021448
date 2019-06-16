import { TestBed } from '@angular/core/testing';

import { BruMapServiceService } from './bru-map-service.service';

describe('BruMapServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BruMapServiceService = TestBed.get(BruMapServiceService);
    expect(service).toBeTruthy();
  });
});
