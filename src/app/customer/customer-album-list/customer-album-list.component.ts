import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar } from '@angular/material';

import { AlbumService } from '../../core/services/album.service';
import { ReviewService } from '../../core/services/review.service';

import { Album } from 'src/app/shared/models/album';
import { AlbumReview } from 'src/app/shared/models/album-review';

@Component({
  selector: 'app-customer-album-list',
  templateUrl: './customer-album-list.component.html',
  styleUrls: ['./customer-album-list.component.css']
})
export class CustomerAlbumListComponent implements OnInit {

  albumList: Album[] = null;
  selectedAlbum: Album = null;
  albumReview: AlbumReview = null;

  currentRating = 5;
  currentComment = '';

  constructor(
    public router: Router,
    public modalService: NgbModal,
    public snackBar: MatSnackBar,
    public albumService: AlbumService,
    public reviewService: ReviewService
  ) { }

  ngOnInit() {
    this.albumService.getPurchasedAlbums()
      .subscribe(response => {
        this.albumList = response;
      });
  }

  view(reviewContent: any, album: Album) {
    this.selectedAlbum = album;
    this.reviewService.getAlbumReview(album.albumId)
      .subscribe(response => {
        this.albumReview = response;
        if (this.albumReview) {
          this.modalService.open(reviewContent);
        }
      });
  }

  post(postReview: any, album: Album) {
    this.selectedAlbum = album;
    this.modalService.open(postReview);
  }

  deleteReview() {
    const requestObj = { 'albumReviewId': this.albumReview.albumReviewId };
    this.reviewService.deleteAlbumReview(requestObj)
      .subscribe(() => {
        setTimeout(() => {
          this.modalService.dismissAll();
          this.openSnackBar('Review deleted', 'Close', 2000);
          this.router.navigate(['/customer/album-list']);
        }, 1000);
      });
  }

  sendReview() {
    if (this.selectedAlbum) {
      if (this.currentRating < 1 || this.currentComment === '') {
        return;
      } else {
        const requestObj = { 'albumId': this.selectedAlbum.albumId };
        requestObj['rating'] = this.currentRating;
        requestObj['reviewComment'] = this.currentComment;
        this.reviewService.postAlbumReview(requestObj)
          .subscribe(() => {
            setTimeout(() => {
              this.modalService.dismissAll();
              this.openSnackBar('Review sent', 'Close', 2000);
              this.router.navigate(['/customer/album-list']);
            }, 1000);
          });
      }
    }
  }

  openSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, { duration: duration });
  }

}
