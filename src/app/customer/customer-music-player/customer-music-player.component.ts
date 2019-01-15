import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Track } from '../../shared/models/track';

import { TrackService } from '../../core/services/track.service';

@Component({
  selector: 'app-customer-music-player',
  templateUrl: './customer-music-player.component.html',
  styleUrls: ['./customer-music-player.component.css']
})
export class CustomerMusicPlayerComponent implements OnInit {

  selectedTrack: Track;
  playingTrack: Track;

  constructor(public router: Router, public trackService: TrackService) { }

  ngOnInit() {
    this.selectedTrack = this.trackService.selectedTrack;
    this.trackService.getATrack(this.trackService.selectedTrack.trackId)
      .subscribe(response => {
        this.playingTrack = response;
        console.log(this.playingTrack);
      });
  }

}
