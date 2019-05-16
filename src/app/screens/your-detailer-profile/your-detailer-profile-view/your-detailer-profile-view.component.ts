import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DetailerService } from '../../../services/detailer.service';
import { UserService } from '../../../services/user.service';
import { ContactService } from '../../../services/contact.service';
import { ReviewService } from '../../../services/review.service';

@Component({
  selector: 'app-your-detailer-profile-view',
  templateUrl: './your-detailer-profile-view.component.html',
  styleUrls: ['./your-detailer-profile-view.component.css']
})
export class YourDetailerProfileViewComponent implements OnInit {

  userProfile: any;

  constructor(private detailerService : DetailerService, private userService : UserService, private reviewService: ReviewService, private contactService : ContactService) { }

  ngOnInit() {
    this.detailerService.findSpecificDetailer(localStorage.getItem('userId')).subscribe( res => {
      this.userProfile = res;
    })
  }

  @Output() deleteEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();

  editProfile() {

  }

  deleteProfile(){
    this.contactService.deleteProfileContacts(this.userProfile.id).subscribe(res => {
      console.log(res);
      this.reviewService.deleteProfileReviews(this.userProfile.id).subscribe(res => {
        console.log(res);
        this.detailerService.deleteDetailerProfile(this.userProfile.id).subscribe(res => {
          console.log(res);
          this.deleteEvent.emit();
          this.userService.isDetailerOff(this.userProfile.userId).subscribe(res => {
            console.log(res);
          })
        })
      });
    });
  }

  updateProfile(){
    this.updateEvent.emit();
  }

}
