import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from '../../../models/review';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) { }

  ngOnInit() {
  }

  makeReview(form: NgForm){
    let review: Review = {
      comment: form.value.comment,
      product: parseInt(this.route.snapshot.paramMap.get('idProduct')!),
      rating: form.value.rating
    }

    this.reviewService.postReview(review).subscribe((data: any) => {
      console.log(data)
    });

  }

}
