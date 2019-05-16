import { Component, OnInit } from "@angular/core";
import { ReviewService } from "../../../services/review.service";
import { ContactService } from "../../../services/contact.service";

@Component({
  selector: "app-your-user-profile-base",
  templateUrl: "./your-user-profile-base.component.html",
  styleUrls: ["./your-user-profile-base.component.css"]
})
export class YourUserProfileBaseComponent implements OnInit {
  
  userReviews: any;

  userContacts: any;

  status = 'base';

  detailerId = null;

  constructor(
    private reviewService: ReviewService,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.reviewService.getUserReviews().subscribe(res => {
      console.log(res);
      this.userReviews = res;
    });
    this.contactService.findUserContacts().subscribe(res => {
      console.log(res);
      this.userContacts = res;
    });
  }

  deleteReview(reviewId) {
    this.reviewService.deleteReview(reviewId).subscribe(res => {
      this.reviewService.getUserReviews().subscribe(res => {
        this.userReviews = res;
        console.log(res)
      })
    })
  }

  viewProfile(detailerId) {
    this.detailerId = detailerId;
    console.log(this.detailerId)
    this.status = 'profile';
    

  }

  back(){
    this.status = 'base';
    this.detailerId = null;

    this.reviewService.getUserReviews().subscribe(res => {
      console.log(res);
      this.userReviews = res;
    });
    this.contactService.findUserContacts().subscribe(res => {
      console.log(res);
      this.userContacts = res;
    });
  }
}
