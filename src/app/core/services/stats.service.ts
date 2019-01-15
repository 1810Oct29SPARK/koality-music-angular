import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PublisherData } from '../../shared/models/publisher-data';
import { CustomerData } from '../../shared/models/customer-data';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(public http: HttpClient, public authService: AuthService) { }

  getPublisherStats(): Observable<PublisherData> {
    const body = { 'publisherId': this.authService.currentPublisherId };
    console.log(body);
    return this.http.post<PublisherData>(AuthService.baseUrl + 'publisher-stats', JSON.stringify(body));
  }

  getCustomerStats(): Observable<CustomerData> {
    const body = { 'customerId': this.authService.currentCustomerId };
    return this.http.post<CustomerData>(AuthService.baseUrl + 'customer-stats', JSON.stringify(body));
  }

}
