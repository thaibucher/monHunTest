import { TestBed } from '@angular/core/testing';

import { MonstieServiceService } from './monstie-service.service';

describe('MonstieServiceService', () => {
  let service: MonstieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonstieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
