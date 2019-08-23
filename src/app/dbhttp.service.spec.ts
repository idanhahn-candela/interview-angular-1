import { TestBed } from '@angular/core/testing';

import { DBHttpService } from './dbhttp.service';

describe('DBHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DBHttpService = TestBed.get(DBHttpService);
    expect(service).toBeTruthy();
  });
});
