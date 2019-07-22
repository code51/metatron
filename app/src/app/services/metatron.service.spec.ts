import { TestBed } from '@angular/core/testing';

import { MetatronService } from './metatron.service';

describe('MetatronService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetatronService = TestBed.get(MetatronService);
    expect(service).toBeTruthy();
  });
});
