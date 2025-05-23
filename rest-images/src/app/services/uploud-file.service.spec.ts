import { TestBed } from '@angular/core/testing';

import { UploudFileService } from './uploud-file.service';

describe('UploudFileService', () => {
  let service: UploudFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploudFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
