import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { Track } from '../../shared/models/track';

import { TrackService } from '../../core/services/track.service';
import { ReviewService } from 'src/app/core/services/review.service';

@Component({
  selector: 'app-publisher-track-list',
  templateUrl: './publisher-track-list.component.html',
  styleUrls: ['./publisher-track-list.component.css']
})
export class PublisherTrackListComponent implements OnInit {

  displayedColumns: string[] = [
    'name',
    'genre',
    'composer',
    'artist',
    'length',
    'price',
    'action'
  ];
  rawData: Track[];
  dataSource = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public trackService: TrackService, public router: Router, public reviewService: ReviewService) { }

  ngOnInit() {
    this.trackService.getPublishedTracks()
      .subscribe(response => {
        this.rawData = response;
        this.dataSource = new MatTableDataSource<Track>(this.rawData);
        this.dataSource.paginator = this.paginator;
      });
  }

  viewReview(track: Track) {
    this.reviewService.selectedTrack = track;
    this.router.navigate(['/publisher/track-reviews']);
  }

}
