import { TestBed } from '@angular/core/testing';

import { OnDestroySubject } from './on-destroy-subject';

describe('OnDestroySubject', () => {
  let service: OnDestroySubject;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnDestroySubject);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
