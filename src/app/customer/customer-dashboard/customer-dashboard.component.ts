import { Component, OnInit } from '@angular/core';

import { StatsService } from '../../core/services/stats.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {

  numberOfTracksBought = 0;
  numberOfAlbumsBought = 0;
  numberOfSubscribees = 0;

  constructor(public statsService: StatsService) { }

  ngOnInit() {
    setTimeout(() => {
      this.loadCustomerStats();
    }, 1000);
  }

  loadCustomerStats() {
    this.statsService.getCustomerStats()
      .subscribe(response => {
        this.numberOfTracksBought = response.numberOfTracksBought;
        this.numberOfAlbumsBought = response.numberOfAlbumsBought;
        this.numberOfSubscribees = response.numberOfSubscribees;
      });
  }

}
