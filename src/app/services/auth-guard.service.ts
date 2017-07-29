import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot,CanActivate} from "@angular/router";
import { AuthService } from 'app/services/auth.service';


@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.auth.isAuthenticated()){
      console.log(route);
      console.log("pass");
      return true;
    }
    else{
      console.error("block");
      return false;
    }
  }


}
