import { Component, OnInit } from '@angular/core';
import { Review } from '../repository/review';
import { ReviewService } from '../review-service/review.service';

@Component({
  selector: 'app-review-search',
  templateUrl: './review-search.component.html',
  styleUrls: ['./review-search.component.css']
})
export class ReviewSearchComponent implements OnInit {

  reviewsArray?: Review[];
  selectedReview?: Review;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getReview().subscribe(r => this.reviewsArray = r)
  }

  getReviewsByString(str : string): void {
    this.reviewService.getReviewByString(str).subscribe(r => this.reviewsArray = r);
  }

  onSelect(r: Review): void {
    this.selectedReview = r;
  }


}
