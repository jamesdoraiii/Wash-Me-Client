import { Component, OnInit } from '@angular/core';
import { DetailerService } from '../../../services/detailer.service';

@Component({
  selector: 'app-your-detailer-profile-base',
  templateUrl: './your-detailer-profile-base.component.html',
  styleUrls: ['./your-detailer-profile-base.component.css']
})
export class YourDetailerProfileBaseComponent implements OnInit {

  status = window.localStorage.getItem('detailerStatus');

  detailer: any;

  constructor(private detailerService : DetailerService) { }

  ngOnInit() {
    if(this.status == 'true'){
      this.detailerService.findSpecificDetailer(localStorage.getItem('userId')).subscribe( res => {
        console.log(res)
        this.detailer = res;
      })

    }
  
  }

  updateStatus($event) {
    this.status = 'true'
  }

  deleteProfile(){
    this.status = 'false';
    localStorage.setItem('detailerStatus','false');
  }

  updateProfile(){
    this.status = 'update'
  }

  updateComplete(){
    this.status = 'true';
    this.detailerService.findSpecificDetailer(localStorage.getItem('userId')).subscribe( res => {
      console.log(res)
      this.detailer = res;
    })
  }

}
