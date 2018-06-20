import { TestBed, inject } from '@angular/core/testing';

import { CalcDataService } from './calc-data.service';

describe('CalcDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcDataService]
    });
  });

  it('should be created', inject([CalcDataService], (service: CalcDataService) => {
    expect(service).toBeTruthy();
  }));
});
