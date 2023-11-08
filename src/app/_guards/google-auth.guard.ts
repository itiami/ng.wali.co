import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const googleAuthGuard: CanActivateFn = async (route, state) => {

  const gToken = localStorage.getItem("gToken");
  const router = inject(Router);


  if (gToken) {
    return true;
  } else {
    alert("Authentication is required. Click Ok to back to LOGIN Page");
    router.navigate(["/auth/login"])
    return false;
  }

};
