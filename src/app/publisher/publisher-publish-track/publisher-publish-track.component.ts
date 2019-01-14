import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-publisher-publish-track',
  templateUrl: './publisher-publish-track.component.html',
  styleUrls: ['./publisher-publish-track.component.css']
})
export class PublisherPublishTrackComponent implements OnInit {

  publishTrackForm: FormGroup;
  publishFormControls: any;
  audioName = 'Choose file';
  audioType: string;
  audioUrl: string;

  constructor(public formBuilder: FormBuilder) {

    this.publishTrackForm = this.formBuilder.group({
      trackName: ['', Validators.required],
      genre: ['', Validators.required],
      composer: ['', Validators.required],
      artist: ['', Validators.required],
      unitPrice: ['', [Validators.required]],
      audio: ['', Validators.required]
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
      this.audioType = file.name.substring(file.name.length - 3);
      this.audioUrl = reader.result.toString();
    };
  }

  publishTrack() {
    console.log('publish track form submitted');
    console.log(this.publishTrackForm.value);
  }

}
