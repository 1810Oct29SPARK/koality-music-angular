import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-publisher-home',
  templateUrl: './publisher-home.component.html',
  styleUrls: ['./publisher-home.component.css']
})
export class PublisherHomeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logoutPublisher() {
    this.authService.logout();
  }

}
