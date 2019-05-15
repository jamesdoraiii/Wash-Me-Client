import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "../../../services/user.service";
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: "app-splash-screen-base",
  templateUrl: "./splash-screen-base.component.html",
  styleUrls: ["./splash-screen-base.component.css"]
})
export class SplashScreenBaseComponent implements OnInit {
  status = "splash";
  loggedin: boolean = true;

  //This variable is bound using ng model to the login form.
  //This is the information that we will send to the user service in order to login
  loginInfo = new FormGroup({

    username: new FormControl(''),
    pass: new FormControl('')
  });

  loginSend = { user: {} }



  //This variable is bound using ng model to the login form.
  //This is the information that we will send to the user service in order to login
  signUpInfo = new FormGroup({

    username: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required,
    Validators.minLength(6)]),
    emailAddress: new FormControl('', [Validators.required]),
    fName: new FormControl('', [Validators.required]),
    lName: new FormControl('', [Validators.required])

  });

  signUpSend = { user: {} }

  user = {};


  @Output() messageEvent = new EventEmitter<any>();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  // The switchTo functions below are responsible for changing the value of this.status when particular buttons are clicked. This.status decides what is shown on the splash page. This could be the splash page, the login, the signup, or the contact.

  switchToSignup() {
    this.status = "signup";
    console.log(this.status);
  }

  switchToLogin() {
    this.status = "login";
    console.log(this.status);
  }

  switchToContact() {
    this.status = "contact";
    console.log(this.status);
  }

  switchToSplash() {
    this.status = "splash";
    console.log(this.status);
  }

  //This function will take the login information and send it to the database. The user will then be logged in and brought to the homepage
  sendLogin() {

    let liData = { user: this.loginInfo.value }

    this.loginSend.user =
      this.loginInfo.value;

    this.userService.logIn(liData).subscribe(res => {
      console.log(res);
      window.localStorage.setItem('token', res.sessionToken);
      window.localStorage.setItem('detailerStatus', res.user.isDetailer);
      window.localStorage.setItem('detailerStatus', res.user.isDetailer);
      this.messageEvent.emit(window.localStorage.getItem('token'));
      window.localStorage.setItem('userId', res.user.id);
    })


  }

  //This function will take the login information and send it to the database. The user will then be logged in and brought to the homepage


  sendSignUp() {

    let siData = { user: this.signUpInfo.value }

    this.signUpSend.user =
      this.signUpInfo.value;
    console.log(this.signUpSend.user)
    this.userService.signUp(siData).subscribe(res => {
      console.log(res);
      window.localStorage.setItem('token', res.sessionToken);
      window.localStorage.setItem('detailerStatus', res.user.isDetailer);
      window.localStorage.setItem('adminStatus', res.user.isAdmin);
      this.messageEvent.emit(window.localStorage.getItem('token'));
      window.localStorage.setItem('userId', res.user.id);

    })
  }
}
