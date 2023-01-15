import { TestBed } from '@angular/core/testing';

import { CenterListService } from './center-list.service';

describe('CenterListService', () => {
  let service: CenterListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CenterListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
