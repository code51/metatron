import { TestBed } from '@angular/core/testing';

import { TypeRegistryService } from './type-registry.service';

describe('TypeRegistryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeRegistryService = TestBed.get(TypeRegistryService);
    expect(service).toBeTruthy();
  });
});
