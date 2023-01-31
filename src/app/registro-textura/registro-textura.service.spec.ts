import { TestBed } from '@angular/core/testing';

import { RegistroTexturaService } from './registro-textura.service';

describe('RegistroTexturaService', () => {
  let service: RegistroTexturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroTexturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
