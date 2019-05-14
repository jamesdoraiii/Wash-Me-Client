import { Component, OnInit, Input } from "@angular/core";
import { ReviewService } from '../../services/review.service'
import { FormGroup, FormControl } from '@angular/forms';
import { findSafariExecutable } from 'selenium-webdriver/safari';

@Component({
  selector: "app-display-reviews",
  templateUrl: "./display-reviews.component.html",
  styleUrls: ["./display-reviews.component.css"]
})
export class DisplayReviewsComponent implements OnInit {

  @Input() detailer: any;

  @Input() reviewInput: any;

  reviewInputStatus: any;

  adminStatus: any;

  reviews: any;

  reviewCreate = new FormGroup({
    detailerId: new FormControl(),
    reviewContent: new FormControl(),
    numberOfStars: new FormControl(),
    detailerFname: new FormControl(),
    detailerLname: new FormControl()
  });


  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getDetailerReviews(this.detailer.id).subscribe(res => {
      this.reviews = res;
    })
    this.reviewInputStatus = this.reviewInput;
    this.adminStatus = localStorage.getItem('adminStatus')
    console.log(this.reviewInputStatus)
  }

  onSubmit() {
    this.reviewCreate.controls.detailerId.setValue(this.detailer.id);
    
    this.reviewCreate.controls.detailerFname.setValue(this.detailer.fName);

    this.reviewCreate.controls.detailerLname.setValue(this.detailer.lName);



    this.reviewService.createReview(this.reviewCreate.value).subscribe(res => {
      this.reviewService.getDetailerReviews(this.detailer.id).subscribe(res => {
        this.reviews = res;
        this.reviewCreate.controls.reviewContent.setValue('');
        this.reviewCreate.controls.numberOfStars.setValue('');
      })
    })
  }

  deleteReview(reviewId) {
    this.reviewService.deleteReview(reviewId).subscribe(res => {
      this.reviewService.getDetailerReviews(this.detailer.id).subscribe(res => {
        this.reviews = res;
        console.log(res)
      })
    })
  }

}
