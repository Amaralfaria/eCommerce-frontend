import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../../models/review';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  
  @Input()
  review!: Review;
  constructor() { }

  ngOnInit() {
  }

}
