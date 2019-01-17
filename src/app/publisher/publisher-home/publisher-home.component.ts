import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-publisher-home',
  templateUrl: './publisher-home.component.html',
  styleUrls: ['./publisher-home.component.css']
})
export class PublisherHomeComponent implements OnInit {

  firstName = '';
  lastName = '';
  imageUrl = '';

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.fetchPublisher()
      .subscribe(response => {
        this.authService.currentPublisher = response;
        this.loadPublisherDetail();
      });
  }

  loadPublisherDetail() {
    this.firstName = this.authService.currentPublisher.publisherDetail.firstName;
    this.lastName = this.authService.currentPublisher.publisherDetail.lastName;
    if (this.authService.currentPublisher.imageUrl != null) {
      this.imageUrl = this.authService.currentPublisher.imageUrl;
    }
  }

  logoutPublisher() {
    this.authService.logout();
  }

}
