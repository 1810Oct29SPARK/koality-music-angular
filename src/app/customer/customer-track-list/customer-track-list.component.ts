import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { Track } from '../../shared/models/track';

import { TrackService } from '../../core/services/track.service';

@Component({
  selector: 'app-customer-track-list',
  templateUrl: './customer-track-list.component.html',
  styleUrls: ['./customer-track-list.component.css']
})
export class CustomerTrackListComponent implements OnInit {

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

  constructor(public trackService: TrackService, public router: Router) { }

  ngOnInit() {
    this.trackService.getOwnedTracks()
      .subscribe(response => {
        this.rawData = response;
        this.dataSource = new MatTableDataSource<Track>(this.rawData);
        this.dataSource.paginator = this.paginator;
      });
  }

  selectTrack(track: Track) {
    this.trackService.selectedTrack = track;
    this.router.navigate(['/customer/music-player']);
  }

}
