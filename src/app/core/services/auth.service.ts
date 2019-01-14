import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Publisher } from '../../shared/models/publisher';
import { Customer } from '../../shared/models/customer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static baseUrl = 'http://localhost:8080/koality-music-java/';

  public currentPublisherId = 0;
  public currentCustomerId = 0;
  public currentPublisher: Publisher;
  public currentCustomer: Customer;

  constructor(public http: HttpClient, public router: Router) { }

  registerPublisher(requestBody: string): void {

    this.http.post<HttpResponse<number>>(AuthService.baseUrl + 'register-publisher', requestBody, { observe: 'response' })
      .subscribe(response => {
        this.currentPublisherId = parseInt(response.body.toString(), 10);
        this.router.navigate(['/publisher']);
      });

  }

  registerCustomer(requestBody: string) {
    // code
  }

  loginPublisher(requestBody: string) {
    // code
  }

  loginCustomer(requestBody: string) {
    // code
  }

}
