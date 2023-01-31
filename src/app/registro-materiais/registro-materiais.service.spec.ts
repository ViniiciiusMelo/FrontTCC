import { TestBed } from '@angular/core/testing';

import { RegistroMateriaisService } from './registro-materiais.service';

describe('RegistroMateriaisService', () => {
  let service: RegistroMateriaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroMateriaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
