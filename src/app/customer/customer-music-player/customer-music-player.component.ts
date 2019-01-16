import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Track } from '../../shared/models/track';
import { TrackReview } from 'src/app/shared/models/track-review';

import { TrackService } from '../../core/services/track.service';
import { ReviewService } from 'src/app/core/services/review.service';

@Component({
  selector: 'app-customer-music-player',
  templateUrl: './customer-music-player.component.html',
  styleUrls: ['./customer-music-player.component.css']
})
export class CustomerMusicPlayerComponent implements OnInit {

  selectedTrack: Track;
  playingTrack: Track;
  trackReview: TrackReview;

  currentRating = 5;
  currentComment = '';

  constructor(public router: Router,
    public trackService: TrackService,
    public reviewService: ReviewService,
    public modalService: NgbModal) { }

  ngOnInit() {
    this.selectedTrack = this.trackService.selectedTrack;
    this.trackService.getATrack(this.trackService.selectedTrack.trackId)
      .subscribe(response => {
        this.playingTrack = response;
        console.log(this.playingTrack);
      });
  }

  view(reviewContent: any) {
    this.reviewService.getTrackReview(this.selectedTrack.trackId)
      .subscribe(response => {
        this.trackReview = response;
        if (this.trackReview) {
          this.modalService.open(reviewContent);
        }
      });
  }

  post(postReview: any) {
    this.modalService.open(postReview);
  }

  deleteReview() {
    const requestObj = { 'trackReviewId': this.trackReview.trackReviewId };
    this.reviewService.deleteTrackReview(requestObj)
      .subscribe(() => {
        setTimeout(() => {
          this.modalService.dismissAll();
          this.router.navigate(['/customer/track-list']);
        }, 500);
      });
  }

  sendReview() {
    if (this.currentRating < 1 || this.currentComment === '') {
      return;
    } else {
      const requestObj = { 'trackId': this.selectedTrack.trackId };
      requestObj['rating'] = this.currentRating;
      requestObj['reviewComment'] = this.currentComment;
      this.reviewService.postTrackReview(requestObj)
        .subscribe(() => {
          setTimeout(() => {
            this.modalService.dismissAll();
            this.router.navigate(['/customer/track-list']);
          }, 1000);
        });
    }
  }

}
