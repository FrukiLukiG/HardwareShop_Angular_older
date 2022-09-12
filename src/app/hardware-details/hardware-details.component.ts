import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hardware } from '../repository/hardware';
import { HardwareService } from '../hardware-service/hardware.service';
import { Review } from '../repository/review';
import { ReviewService } from '../review-service/review.service';

@Component({
  selector: 'app-hardware-details',
  templateUrl: './hardware-details.component.html',
  styleUrls: ['./hardware-details.component.css']
})
export class HardwareDetailsComponent implements OnInit {

  hardware?: Hardware;
  reviewsArray?: Review[];

  constructor(private route: ActivatedRoute, private hardwareService: HardwareService,
  private reviewService: ReviewService) { }

  ngOnInit(): void {
    const hardwareCode = String(this.route.snapshot.paramMap.get("code"));

    this.hardwareService.getHardwareByCode(hardwareCode).subscribe(h => this.hardware = h)
    this.reviewService.getReviewByHardwareCode(hardwareCode).subscribe(r => this.reviewsArray = r)
  }



}
