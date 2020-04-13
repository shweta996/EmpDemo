import { TestBed } from '@angular/core/testing';

import { ListEmpService } from './list-emp.service';

describe('ListEmpService', () => {
  let service: ListEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
