import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-detailer-profile-base',
  templateUrl: './your-detailer-profile-base.component.html',
  styleUrls: ['./your-detailer-profile-base.component.css']
})
export class YourDetailerProfileBaseComponent implements OnInit {

  status = window.localStorage.getItem('detailerStatus');

  constructor() { }

  ngOnInit() {
  
  }

  updateStatus($event) {
    this.status = 'true'
  }

}
