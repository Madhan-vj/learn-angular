import { TestBed } from '@angular/core/testing';

import { MydetailsService } from './mydetails.service';

describe('MydetailsService', () => {
  let service: MydetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MydetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
