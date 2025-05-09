import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
  
    constructor(){}
    loggedIn: boolean= false;
    setLoginStatus(status: boolean) {
      this.loggedIn = status;
    }
    isLoggedIn() {
      return this.loggedIn ;
    }
  }
  