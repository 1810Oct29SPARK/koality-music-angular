import { Component, OnInit } from '@angular/core';

import { ReviewService } from '../../core/services/review.service';

import { TrackReview } from 'src/app/shared/models/track-review';
import { Track } from 'src/app/shared/models/track';

@Component({
  selector: 'app-publisher-track-reviews',
  templateUrl: './publisher-track-reviews.component.html',
  styleUrls: ['./publisher-track-reviews.component.css']
})
export class PublisherTrackReviewsComponent implements OnInit {

  track: Track = null;
  trackReviews: TrackReview[] = null;

  constructor(public reviewService: ReviewService) { }

  ngOnInit() {
    this.track = this.reviewService.selectedTrack;
    this.reviewService.getTrackReviews(this.track.trackId)
      .subscribe(response => {
        this.trackReviews = response;
      });
  }

}
