import { Component, ViewChild, AfterViewInit  } from '@angular/core';
import { SplashScreenBaseComponent } from './screens/splash/splash-screen-base/splash-screen-base.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token = '';
  title = 'wash-me-material-client';

  receiveLoginInfo($event) {
    this.token = $event
  }

  logout() {
    this.token = '';
    window.localStorage.clear();
  }
}
