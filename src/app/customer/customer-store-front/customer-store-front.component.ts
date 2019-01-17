import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlbumService } from '../../core/services/album.service';
import { AuthService } from 'src/app/core/services/auth.service';

import { Album } from 'src/app/shared/models/album';

@Component({
  selector: 'app-customer-store-front',
  templateUrl: './customer-store-front.component.html',
  styleUrls: ['./customer-store-front.component.css']
})
export class CustomerStoreFrontComponent implements OnInit {

  loaded = false;
  albumList: Album[] = null;

  constructor(public router: Router, public albumService: AlbumService, public authService: AuthService) { }

  ngOnInit() {
    this.albumService.getRecommendedAlbums(this.authService.currentCustomer.customerDetail.favoriteGenre)
      .subscribe(response => {
        if (response) {
          this.albumList = response;
          this.loaded = true;
        }
      });
  }

}
