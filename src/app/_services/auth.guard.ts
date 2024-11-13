import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from './account.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const router = inject(Router);

  // Check if the user is logged in
  if (accountService.getCurrentUser()) {
    return true; // User is logged in, allow access
  }

  // User is not logged in, redirect to login page
  router.navigate(['/login']);
  return false;
};