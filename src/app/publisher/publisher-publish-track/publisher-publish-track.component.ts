import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GlobalVars } from '../../shared/global-vars';

import { TrackService } from '../../core/services/track.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-publisher-publish-track',
  templateUrl: './publisher-publish-track.component.html',
  styleUrls: ['./publisher-publish-track.component.css']
})
export class PublisherPublishTrackComponent implements OnInit {

  musicGenres = GlobalVars.musicGenres;

  publishTrackForm: FormGroup;
  publishFormControls: any;
  audioName = 'Choose a file';
  audioType: string;
  audioUrl: string;

  constructor(public formBuilder: FormBuilder,
    public trackService: TrackService,
    public router: Router,
    public snackBar: MatSnackBar
  ) {

    this.publishTrackForm = this.formBuilder.group({
      trackName: ['', Validators.required],
      genre: ['', Validators.required],
      composer: ['', Validators.required],
      artist: ['', Validators.required],
      trackLength: [0, Validators.required],
      unitPrice: [0, [Validators.required]],
      audio: [null, Validators.required]
    });

  }

  ngOnInit() {
    this.publishFormControls = this.publishTrackForm.controls;
  }

  loadAudioUrl(event: any) {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.audioName = file.name;
      this.audioType = file.name.substring(file.name.lastIndexOf('.') + 1);
      this.audioUrl = reader.result.toString();
    };
  }

  publishTrack() {
    console.log(this.publishTrackForm.value);
    const requestObj = this.publishTrackForm.value;
    requestObj['audioType'] = this.audioType;
    requestObj['audioData'] = this.audioUrl;
    this.trackService.publishTrack(requestObj)
      .subscribe(response => {
        this.openSnackBar('Track published', 'Close', 3000);
        this.router.navigate(['/publisher/dashboard']);
      });
  }

  openSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, { duration: duration });
  }

}
