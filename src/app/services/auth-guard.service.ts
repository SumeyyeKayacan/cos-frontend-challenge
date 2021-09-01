import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserLocalStorageService } from './user-local-storage.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    public router: Router,
    private userLocalStorageService: UserLocalStorageService
  ) {}

  canActivate(): boolean {
    try {
      this.userLocalStorageService.getUser();
      return true;
    } catch {
      this.router.navigate(['login']);
      return false;
    }
  }
}
