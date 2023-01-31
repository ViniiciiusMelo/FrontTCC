import { TestBed } from '@angular/core/testing';

import { RegistroTipoService } from './registro-tipo.service';

describe('RegistroTipoService', () => {
  let service: RegistroTipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroTipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
