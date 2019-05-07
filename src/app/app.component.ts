import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import { SplashScreenBaseComponent } from './screens/splash/splash-screen-base/splash-screen-base.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signedin = false;
  title = 'wash-me-material-client';

  receiveLoginInfo($event) {
    this.signedin = $event
  }

  logout() {
    this.signedin = false;
  }
}
