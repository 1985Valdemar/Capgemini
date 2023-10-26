import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

Injectable({
  providedIn: 'root'
})

export const authGuard: CanActivateFn = (route, state) => {
  route: ActivatedRouteSnapshot
  state: RouterStateSnapshot 
    return false;

};
