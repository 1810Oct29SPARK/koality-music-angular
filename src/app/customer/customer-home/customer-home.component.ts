import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  firstName = '';
  lastName = '';

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.fetchCustomer()
      .subscribe(response => {
        this.authService.currentCustomer = response;
        this.loadCustomerDetail();
      });
  }

  loadCustomerDetail() {
    this.firstName = this.authService.currentCustomer.customerDetail.firstName;
    this.lastName = this.authService.currentCustomer.customerDetail.lastName;
  }

  logoutCustomer() {
    this.authService.logout();
  }

}
