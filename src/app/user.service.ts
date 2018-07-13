import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  private username;

  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn(usernamee) {
    this.username = usernamee;
  	this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn,this.username;
  }

}
