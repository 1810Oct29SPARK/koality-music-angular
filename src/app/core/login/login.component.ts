import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  publisherLoginForm: FormGroup;
  customerLoginForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public authService: AuthService) {

    this.publisherLoginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

    this.customerLoginForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  publisherLogin() {
    console.log('publisher login form submitted');
    console.log(this.publisherLoginForm.value);
    this.authService.loginPublisher(JSON.stringify(this.publisherLoginForm.value));
  }

  customerLogin() {
    console.log('customer login form submitted');
    console.log(this.customerLoginForm.value);
    this.authService.loginCustomer(JSON.stringify(this.customerLoginForm.value));
  }

}
