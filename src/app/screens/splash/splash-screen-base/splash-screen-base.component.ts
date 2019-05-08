import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../services/user.service'


@Component({
  selector: 'app-splash-screen-base',
  templateUrl: './splash-screen-base.component.html',
  styleUrls: ['./splash-screen-base.component.css']
})
export class SplashScreenBaseComponent implements OnInit {

  status = "splash";
  loggedin: boolean = true;


  //This variable is bound using ng model to the login form.
  //This is the information that we will send to the user service in order to login
  loginInfo =  {
    username: "",
    password: ""
  };

  //This variable is bound using ng model to the login form.
  //This is the information that we will send to the user service in order to login
  signUpInfo =  {
    username: "",
    password: "",
    emailAddress: "",
    fName: "",
    lName: ""
  };

  @Output() messageEvent = new EventEmitter<any>();

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.status)
  }

// The switchTo functions below are responsible for changing the value of this.status when particular buttons are clicked. This.status decides what is shown on the splash page. This could be the splash page, the login, the signup, or the contact.

  switchToSignup() {
    this.status = "signup"
    console.log(this.status);
  }

  switchToLogin() {
    this.status = "login"
    console.log(this.status);
  }

  switchToContact() {
    this.status = "contact"
    console.log(this.status);
  }

  switchToSplash() {
    this.status = "splash"
    console.log(this.status);
  }


  //This function will take the login information and send it to the database. The user will then be logged in and brought to the homepage
  sendLogin(){
    console.log(this.loginInfo)
    this.messageEvent.emit(this.loggedin);
  }

  //This function will take the login information and send it to the database. The user will then be logged in and brought to the homepage
  sendSignUp(){
    console.log(this.signUpInfo);
    this.userService.signUp(this.signUpInfo)
    this.messageEvent.emit(this.loggedin);
  }

}
