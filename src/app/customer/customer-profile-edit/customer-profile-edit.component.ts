import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-profile-edit',
  templateUrl: './customer-profile-edit.component.html',
  styleUrls: ['./customer-profile-edit.component.css']
})
export class CustomerProfileEditComponent implements OnInit {

  updateInfoForm: FormGroup;
  updateCredentialsForm: FormGroup;
  uploadImageForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.updateInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      favoriteGenre: ['', Validators.nullValidator]
    });

    this.updateCredentialsForm = this.formBuilder.group({
      oldUsername: ['', [Validators.required]],
      oldPassword: ['', [Validators.required]],
      newUsername: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.uploadImageForm = this.formBuilder.group({
      image: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  updateBasicInfo() {
    console.log('basic info submitted');
    console.log(this.updateInfoForm.value);
  }

  updateProfileImage() {
    console.log('profile image uploaded');
    console.log(this.uploadImageForm.value);
  }

  updateCredentials() {
    console.log('publisher credentials uploaded');
    console.log(this.updateCredentialsForm.value);
  }

}
