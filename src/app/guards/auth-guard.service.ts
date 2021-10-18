import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from '../services/auth/authService';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    public authService: AuthService, 
    public router: Router
  ) { }

  canActivate(): boolean {
    console.log('t');
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/sign-in']);
      return false;
    }
    
    return true;
  }
}
