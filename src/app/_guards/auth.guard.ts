import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem("token");
  const router = inject(Router);

  if (token) {
    return true;
  } else {
    alert("Authentication is required. Click Ok to back to LOGIN Page");
    router.navigate(["/auth/login"]);
    return false;
  }
};
