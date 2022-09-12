import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../repository/review';

@Component({
  selector: 'app-review-info',
  templateUrl: './review-info.component.html',
  styleUrls: ['./review-info.component.css']
})
export class ReviewInfoComponent implements OnInit {

  @Input() reviewPassed?: Review;

  constructor() { }

  ngOnInit(): void {
  }

}
