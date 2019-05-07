import { TestBed } from '@angular/core/testing';

import { DetailerService } from './detailer.service';

describe('DetailerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailerService = TestBed.get(DetailerService);
    expect(service).toBeTruthy();
  });
});
