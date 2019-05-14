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
}
