import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logoutCustomer() {
    this.authService.logout();
  }

}
