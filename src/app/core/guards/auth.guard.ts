import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { CacheService } from '../storage/cache.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor (
		private router: Router,
		private cache: CacheService
	) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (this.cache.get(CacheService.USER)) {
			// Logged in so return true
			return true;
		}

        // Not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}