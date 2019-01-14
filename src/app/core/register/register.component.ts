import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { GlobalVars } from '../../shared/global-vars';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  publisherRegisterForm: FormGroup;
  customerRegisterForm: FormGroup;

  musicGenres = GlobalVars.musicGenres;

  constructor(public router: Router, public formBuilder: FormBuilder, public authService: AuthService) {

    this.publisherRegisterForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      companyName: ['', Validators.nullValidator],
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.nullValidator]
    });

    this.customerRegisterForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      favoriteGenre: ['Choose your favorite genre', Validators.nullValidator],
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword: ['', Validators.nullValidator]
    });

  }

  ngOnInit() {
  }

  publisherRegister() {
    console.log('publisher register form submitted');
    console.log(this.publisherRegisterForm.value);
    this.authService.registerPublisher(JSON.stringify(this.publisherRegisterForm.value));
  }

  customerRegister() {
    console.log('customer register form submitted');
    console.log(this.customerRegisterForm.value);
  }

}
