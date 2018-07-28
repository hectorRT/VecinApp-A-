import { AuthenticationService } from './../_services/authentication.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, public AuthenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.AuthenticationService.isLoggedIn) {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        return true;
    }
}