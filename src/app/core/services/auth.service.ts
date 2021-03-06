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

  // public static baseUrl = 'http://localhost:8080/koality-music-java/';
  public static baseUrl = 'http://ec2-18-218-61-211.us-east-2.compute.amazonaws.com:8080/koality-music-java/';

  public currentPublisherId = 0;
  public currentCustomerId = 0;
  public currentPublisher: Publisher;
  public currentCustomer: Customer;

  constructor(public http: HttpClient, public router: Router) { }

  registerPublisher(requestBody: string): void {

    this.http.post<HttpResponse<number>>(AuthService.baseUrl + 'register-publisher', requestBody, { observe: 'response' })
      .subscribe(response => {
        if (response.ok) {
          this.currentPublisherId = parseInt(response.body.toString(), 10);
          this.router.navigate(['/publisher']);
        } else {
          this.router.navigate(['/register']);
        }
      });

  }

  registerCustomer(requestBody: string) {

    this.http.post<HttpResponse<number>>(AuthService.baseUrl + 'register-customer', requestBody, { observe: 'response' })
      .subscribe(response => {
        if (response.ok) {
          this.currentCustomerId = parseInt(response.body.toString(), 10);
          this.router.navigate(['/customer']);
        } else {
          this.router.navigate(['/register']);
        }
      });

  }

  loginPublisher(requestBody: string) {

    this.http.post<HttpResponse<Publisher>>(AuthService.baseUrl + 'login-publisher', requestBody, { observe: 'response' })
      .subscribe(response => {
        if (response.ok) {
          this.currentPublisherId = parseInt(response.body['publisherId'], 10);
          this.router.navigate(['/publisher']);
        } else {
          this.router.navigate(['/login']);
        }
      });

  }

  loginCustomer(requestBody: string) {

    this.http.post<HttpResponse<Customer>>(AuthService.baseUrl + 'login-customer', requestBody, { observe: 'response' })
      .subscribe(response => {
        if (response.ok) {
          this.currentCustomerId = parseInt(response.body['customerId'], 10);
          this.router.navigate(['/customer']);
        } else {
          this.router.navigate(['/login']);
        }
      });

  }

  logout() {

    this.http.get<string>(AuthService.baseUrl + 'logout')
      .subscribe(() => {
        this.currentCustomer = null;
        this.currentPublisher = null;
        this.currentCustomerId = 0;
        this.currentPublisherId = 0;
        this.router.navigate(['/']);
      });

  }

  fetchPublisher(): Observable<Publisher> {

    const body = { 'publisherId': this.currentPublisherId };

    return this.http.post<Publisher>(AuthService.baseUrl + 'profile-publisher', JSON.stringify(body));

  }

  fetchCustomer(): Observable<Customer> {

    const body = { 'customerId': this.currentCustomerId };

    return this.http.post<Customer>(AuthService.baseUrl + 'profile-customer', JSON.stringify(body));

  }

  updatePublisherInfomation(requestBody: Object): Observable<any> {

    requestBody['publisherId'] = this.currentPublisherId;

    return this.http.put(AuthService.baseUrl + 'profile-publisher', JSON.stringify(requestBody));

  }

  uploadPublisherImage(requestBody: Object): Observable<any> {

    requestBody['publisherId'] = this.currentPublisherId;

    return this.http.post(AuthService.baseUrl + 'image-publisher', JSON.stringify(requestBody));

  }

  updateCustomerInformation(requestBody: Object): Observable<any> {

    requestBody['customerId'] = this.currentCustomerId;

    return this.http.put(AuthService.baseUrl + 'profile-customer', JSON.stringify(requestBody));

  }

  uploadCustomerImage(requestBody: Object): Observable<any> {

    requestBody['customerId'] = this.currentCustomerId;

    return this.http.post(AuthService.baseUrl + 'image-customer', JSON.stringify(requestBody));

  }

}
