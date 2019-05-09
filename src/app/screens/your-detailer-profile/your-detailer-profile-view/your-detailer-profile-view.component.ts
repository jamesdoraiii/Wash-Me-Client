import { Component, OnInit } from '@angular/core';
import { DetailerService } from '../../../services/detailer.service';

@Component({
  selector: 'app-your-detailer-profile-view',
  templateUrl: './your-detailer-profile-view.component.html',
  styleUrls: ['./your-detailer-profile-view.component.css']
})
export class YourDetailerProfileViewComponent implements OnInit {

  userProfile: any;

  constructor(private detailerService : DetailerService) { }

  ngOnInit() {
    this.detailerService.findSpecificDetailer(localStorage.getItem('userId')).subscribe( res => {
      console.log(res)
      this.userProfile = res;
    })
  }

}
