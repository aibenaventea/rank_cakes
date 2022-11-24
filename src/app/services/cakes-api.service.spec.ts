import { TestBed } from '@angular/core/testing';

import { CakesApiService } from './cakes-api.service';

describe('CakesApiService', () => {
  let service: CakesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
