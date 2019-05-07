import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-splash-screen-base',
  templateUrl: './splash-screen-base.component.html',
  styleUrls: ['./splash-screen-base.component.css']
})
export class SplashScreenBaseComponent implements OnInit {

  status = "splash";
  loggedin: boolean = true;

  @Output() messageEvent = new EventEmitter<any>();

  constructor() { }

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

  sendLoginConfirmation(){
    this.messageEvent.emit(this.loggedin);
  }

}
