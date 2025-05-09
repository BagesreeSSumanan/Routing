import { CanActivateFn } from '@angular/router';
import { AuthService } from './service/authService.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  if(authService.isLoggedIn()){
    return true
  }
  else{
    alert("You are not an authenticated user");
    return false;
  }
};
