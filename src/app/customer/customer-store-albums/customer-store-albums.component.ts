import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AlbumService } from '../../core/services/album.service';

import { Album } from 'src/app/shared/models/album';
import { Track } from 'src/app/shared/models/track';

@Component({
  selector: 'app-customer-store-albums',
  templateUrl: './customer-store-albums.component.html',
  styleUrls: ['./customer-store-albums.component.css']
})
export class CustomerStoreAlbumsComponent implements OnInit {

  albumList: Album[] = null;
  selectedAlbum: Album = null;
  trackList: Track[] = null;

  constructor(public modalService: NgbModal, public router: Router, public albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAllAvailableAlbums()
      .subscribe(response => {
        this.albumList = response;
      });
  }

  viewDetail(albumDetail: any, album: Album) {
    this.selectedAlbum = album;
    this.albumService.getAlbumTracks(this.selectedAlbum.albumId)
      .subscribe(response => {
        this.trackList = response;
        this.openDetail(albumDetail);
      });
  }

  openDetail(albumDetail: any) {
    this.modalService.open(albumDetail);
  }

  buy(album: Album) {
    const requestObj = { 'albumId': album.albumId };
    this.albumService.purchaseAlbum(requestObj)
      .subscribe(response => {
        setTimeout(() => {
          this.router.navigate(['/customer/store-front']);
        }, 1000);
      });
  }

}
