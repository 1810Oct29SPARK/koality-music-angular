import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/services/auth.service';

import { GlobalVars } from '../../shared/global-vars';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-customer-profile-edit',
  templateUrl: './customer-profile-edit.component.html',
  styleUrls: ['./customer-profile-edit.component.css']
})
export class CustomerProfileEditComponent implements OnInit {

  musicGenres = GlobalVars.musicGenres;

  updateInfoForm: FormGroup;
  updateCredentialsForm: FormGroup;
  uploadImageForm: FormGroup;

  imageName = 'Choose a file';
  imageType: string = null;
  imageUrl: string = null;

  constructor(public formBuilder: FormBuilder,
    public authService: AuthService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {

    this.updateInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      favoriteGenre: [null, Validators.nullValidator]
    });

    this.updateCredentialsForm = this.formBuilder.group({
      oldUsername: ['', [Validators.required]],
      oldPassword: ['', [Validators.required]],
      newUsername: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmNewPassword: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.uploadImageForm = this.formBuilder.group({
      image: [null, Validators.required]
    });

  }

  ngOnInit() {
  }

  loadImageUrl(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageName = file.name;
      this.imageType = file.name.substring(file.name.lastIndexOf('.') + 1);
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = () => {
        this.imageUrl = fr.result.toString();
      };
    }
  }

  updateBasicInfo() {
    console.log(this.updateInfoForm.value);
    this.authService.updateCustomerInformation(this.updateInfoForm.value)
      .subscribe(() => {
        this.openSnackBar('Profile updated', 'Close', 3000);
        this.router.navigate(['/customer/dashboard']);
      });
  }

  updateProfileImage() {
    console.log(this.uploadImageForm.value);
    const image = {};
    image['imageType'] = this.imageType;
    image['imageData'] = this.imageUrl;
    this.authService.uploadCustomerImage(image)
      .subscribe(() => {
        this.openSnackBar('Image uploaded', 'Close', 3000);
        this.router.navigate(['/customer/dashboard']);
      });
  }

  updateCredentials() {
    console.log('publisher credentials uploaded');
    console.log(this.updateCredentialsForm.value);
  }

  openSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, { duration: duration });
  }

}
