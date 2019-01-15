import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(public http: HttpClient, public authService: AuthService) { }
}
