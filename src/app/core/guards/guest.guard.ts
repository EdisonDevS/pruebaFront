import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AUTH } from 'src/environments/environment';

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(
    private router: Router,
    ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!localStorage.getItem(AUTH.token))
      {
        return true;
      }
      else {
        return this.router.navigateByUrl('/cuentas');
      }
  }

}
