import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../../services/review.service';


@Component({
  selector: 'app-your-user-profile-base',
  templateUrl: './your-user-profile-base.component.html',
  styleUrls: ['./your-user-profile-base.component.css']
})

export class YourUserProfileBaseComponent implements OnInit {
userReviews : any;

  constructor(private reviewService:ReviewService) { }

  ngOnInit() {
    this.reviewService.getUserReviews().subscribe(res => {
      console.log(res);
      this.userReviews = res;
    })
  }

}
