import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { constructor } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
 {

  constructor(private router:Router ) 
  { 
    
  }

  canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot)
  {
   if(this.IsLoggedIn())
   {
     return true;
   }
   else
   {
     this.router.navigate(['login']);
     return false;
   }
  }
 
  IsLoggedIn()
  {
    if(window.sessionStorage.getItem("active") != null
     &&
     window.sessionStorage.getItem("active") =="1")
     {
      return true;
     }
     else
     {

       return false;
     }
  }
  
  CheckUser(userdetails)
  {
    if(userdetails.uname=="abc"
    &&
    userdetails.password=="abc@123")
    {
      window.sessionStorage.setItem("active","1");
      return true;
    }
    else
    {
      return false;
    }
  }

  SignOut()
  {
    window.sessionStorage.setItem("active","0");
  }
}

