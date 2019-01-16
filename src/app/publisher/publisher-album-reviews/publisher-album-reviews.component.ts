import { Component, OnInit } from '@angular/core';

import { ReviewService } from '../../core/services/review.service';

import { Album } from '../../shared/models/album';
import { AlbumReview } from '../../shared/models/album-review';

@Component({
  selector: 'app-publisher-album-reviews',
  templateUrl: './publisher-album-reviews.component.html',
  styleUrls: ['./publisher-album-reviews.component.css']
})
export class PublisherAlbumReviewsComponent implements OnInit {

  album: Album = null;
  albumReviews: AlbumReview[] = null;

  constructor(public reviewService: ReviewService) { }

  ngOnInit() {
    this.album = this.reviewService.selectedAlbum;
    this.reviewService.getAlbumReviews(this.album.albumId)
      .subscribe(response => {
        this.albumReviews = response;
      });
  }

}
