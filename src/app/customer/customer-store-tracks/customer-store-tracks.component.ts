import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { Track } from '../../shared/models/track';

import { TrackService } from '../../core/services/track.service';

@Component({
  selector: 'app-customer-store-tracks',
  templateUrl: './customer-store-tracks.component.html',
  styleUrls: ['./customer-store-tracks.component.css']
})
export class CustomerStoreTracksComponent implements OnInit {

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
    this.trackService.getAllAvailableTracks()
      .subscribe(response => {
        this.rawData = response;
        this.dataSource = new MatTableDataSource<Track>(this.rawData);
        this.dataSource.paginator = this.paginator;
      });
  }

  shopping(event: any, track: Track) {
    if (event.checked && !this.trackService.shoppingCart.includes(track.trackId)) {
      this.trackService.shoppingCart.push(track.trackId);
    } else if (!event.checked && this.trackService.shoppingCart.includes(track.trackId)) {
      this.trackService.shoppingCart.splice(this.trackService.shoppingCart.indexOf(track.trackId), 1);
    }
    console.log(this.trackService.shoppingCart);
  }

  checkout() {
    this.trackService.shoppingCart.forEach(trackId => {
      this.trackService.purchaseTrack({ 'trackId': trackId })
        .subscribe(response => {
          console.log(response);
        });
    });
    setTimeout(() => {
      this.router.navigate(['/customer/track-list']);
    }, 2000);
  }

}
