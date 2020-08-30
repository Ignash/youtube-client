import { TestBed } from '@angular/core/testing';

import { DetailedInformationService } from './detailed-information.service';

describe('DetailedInformationService', () => {
  let service: DetailedInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailedInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
