import { TestBed } from '@angular/core/testing';

import { EmpCreateService } from './emp-create.service';

describe('EmpCreateService', () => {
  let service: EmpCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
