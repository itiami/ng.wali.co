import { CanActivateFn } from '@angular/router';

export const facebookAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
