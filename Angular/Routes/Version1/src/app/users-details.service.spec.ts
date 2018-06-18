import { TestBed, inject } from '@angular/core/testing';

import { UsersDetailsService } from './users-details.service';

describe('UsersDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersDetailsService]
    });
  });

  it('should be created', inject([UsersDetailsService], (service: UsersDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
