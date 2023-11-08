import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { facebookAuthGuard } from './facebook-auth.guard';

describe('facebookAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => facebookAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
