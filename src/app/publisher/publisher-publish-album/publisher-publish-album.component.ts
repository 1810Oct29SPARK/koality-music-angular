import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material';

import { AlbumService } from '../../core/services/album.service';
import { TrackService } from 'src/app/core/services/track.service';

import { GlobalVars } from '../../shared/global-vars';
import { Track } from '../../shared/models/track';

@Component({
  selector: 'app-publisher-publish-album',
  templateUrl: './publisher-publish-album.component.html',
  styleUrls: ['./publisher-publish-album.component.css']
})
export class PublisherPublishAlbumComponent implements OnInit {

  musicGenres = GlobalVars.musicGenres;

  publishAlbumForm: FormGroup;
  createList: number[] = [];

  publishedTracks: Track[] = null;

  imageName = 'Upload an album art';
  imageType: string;
  imageUrl: string;

  constructor(public formBuilder: FormBuilder,
    public router: Router,
    public albumService: AlbumService,
    public trackService: TrackService,
    public snackBar: MatSnackBar
  ) {

    this.publishAlbumForm = this.formBuilder.group({
      albumName: ['', Validators.required],
      genre: ['Choose a genre', Validators.required],
      unitPrice: [0, Validators.required],
      image: [null, Validators.required]
    });

  }

  ngOnInit() {
    this.trackService.getPublishedTracks()
      .subscribe(response => {
        this.publishedTracks = response;
      });
  }

  selectTrack(event: any, track: Track) {
    if (event.checked && !this.createList.includes(track.trackId)) {
      this.createList.push(track.trackId);
    } else if (!event.checked && this.createList.includes(track.trackId)) {
      this.createList.splice(this.createList.indexOf(track.trackId), 1);
    }
    console.log(this.createList);
  }

  loadImageUrl(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageName = file.name;
      this.imageType = file.name.substring(file.name.lastIndexOf('.') + 1);
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = () => {
        this.imageUrl = fr.result.toString();
        console.log(this.imageUrl);
      };
    }
  }

  publishAlbum() {
    if (this.createList.length === 0 || !this.publishAlbumForm.valid) {
      return;
    } else {
      const requestObj = this.publishAlbumForm.value;
      requestObj['imageType'] = this.imageType;
      requestObj['imageData'] = this.imageUrl;
      requestObj['trackIdList'] = this.createList;
      this.albumService.publishAlbum(requestObj)
        .subscribe((response) => {
          this.openSnackBar('Album published', 'Close', 3000);
          this.router.navigate(['/publisher/dashboard']);
        });
    }
  }

  openSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, { duration: duration });
  }

}
