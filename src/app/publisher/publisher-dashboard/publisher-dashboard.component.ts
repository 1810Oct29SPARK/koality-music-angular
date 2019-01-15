import { Component, OnInit } from '@angular/core';

import { StatsService } from '../../core/services/stats.service';

@Component({
  selector: 'app-publisher-dashboard',
  templateUrl: './publisher-dashboard.component.html',
  styleUrls: ['./publisher-dashboard.component.css']
})
export class PublisherDashboardComponent implements OnInit {

  numberOfTracksSold = 0;
  numberOfAlbumsSold = 0;
  numberOfSubscribers = 0;

  constructor(public statsService: StatsService) { }

  ngOnInit() {
    setTimeout(() => {
      this.loadPublisherStats();
    }, 1000);
  }

  loadPublisherStats() {
    this.statsService.getPublisherStats()
      .subscribe(response => {
        this.numberOfTracksSold = response.numberOfTracksSold;
        this.numberOfAlbumsSold = response.numberOfAlbumsSold;
        this.numberOfSubscribers = response.numberOfSubscribers;
      });
  }

}
