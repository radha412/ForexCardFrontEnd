import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-forex-card-form',
  templateUrl: './new-forex-card-form.component.html',
  styleUrls: ['./new-forex-card-form.component.css']
})
export class NewForexCardFormComponent {
  isAdhaarVerified: any;
  isPancardVerified: any;
  
  verifyOTP() {
    this.isOtpSent = false;
  this.isOtpVerified = true;
  }
  
  sendOTP() {
  this.isOtpSent = true;
  }
    firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  isOtpSent: any;
  isOtpVerified: any;
    constructor(private _formBuilder: FormBuilder) {}
}
