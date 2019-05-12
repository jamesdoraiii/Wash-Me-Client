import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DetailerService } from '../../../services/detailer.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-your-detailer-profile-view',
  templateUrl: './your-detailer-profile-view.component.html',
  styleUrls: ['./your-detailer-profile-view.component.css']
})
export class YourDetailerProfileViewComponent implements OnInit {

  userProfile: any;

  constructor(private detailerService : DetailerService, private userService : UserService) { }

  ngOnInit() {
    this.detailerService.findSpecificDetailer(localStorage.getItem('userId')).subscribe( res => {
      console.log(res)
      this.userProfile = res;
    })
  }

  @Output() deleteEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();

  editProfile() {

  }

  deleteProfile(){
    this.detailerService.deleteDetailerProfile(this.userProfile.id).subscribe(res => {
      console.log(res);
      this.deleteEvent.emit();
      this.userService.isDetailerOff(this.userProfile.userId).subscribe(res => {
        console.log(res);
      })
    })
  }

  updateProfile(){
    this.updateEvent.emit();
  }

}
