import { TestBed } from '@angular/core/testing';

import { MedicoselectorService } from './medicoselector.service';

describe('MedicoselectorService', () => {
  let service: MedicoselectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicoselectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
