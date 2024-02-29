import { Component, OnInit } from '@angular/core';
import { Review } from '../../../models/review';
import { ReviewService } from '../services/review.service';
import { ActivatedRoute } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  reviews!: Review[];
  idProduct: number = parseInt(this.route.snapshot.paramMap.get('idProduct')!);

  constructor(private reviewService: ReviewService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('AAAAAAAAAAAA')
    this.reviewService.getReviews(this.idProduct).subscribe((data: Review[]) => {
      this.reviews = data;
    })
  }

}
