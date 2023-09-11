
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation, MatStepperModule } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgSwitch, NgSwitchCase, AsyncPipe } from '@angular/common';
import { ForexCardService } from 'src/app/services/forex-card.service';
import { AdhaarCardDto } from 'src/app/dto/AdhaarCardDto';

/**
 * @title Stepper responsive
 */
@Component({
  selector: 'app-forex-card-form',
  templateUrl: './forex-card-form.component.html',
  styleUrls: ['./forex-card-form.component.css'],

})
export class ForexCardFormComponent {

  isOtpSent: boolean = false;
  isOtpVerified: boolean = false;
  isAdhaarVerified: boolean = false;
  isPancardVerified: boolean = false;

  sendOTPForm = this._formBuilder.group({
    phoneNumber: ['', Validators.required],
  });

verifyOTPForm = this._formBuilder.group({
  otp:['', Validators.required]
});

verifyAdhaarForm = this._formBuilder.group({
  adhaarCard:['', Validators.required]
});

verifyPanCardForm= this._formBuilder.group({
  panCard :['', Validators.required]
});
verifyPassportForm= this._formBuilder.group({
  passport:['', Validators.required]
});
userNameForm= this._formBuilder.group({
  name:['', Validators.required]
});

  constructor(private _formBuilder: FormBuilder, private forexCardService:  ForexCardService) { }

  verifyOTP() {
    this.isOtpSent = false;
    this.isOtpVerified = true;
  }

  verifyPanCard() {
    if(this.verifyPanCardForm.value.panCard === null || this.verifyPanCardForm.value.panCard == undefined){
      this.verifyPanCardForm.value.panCard = ' ';
    }
    this.forexCardService.verifyPanCard(this.verifyPanCardForm.value.panCard).subscribe({
      next:(data)=>{
        this.isPancardVerified = true;
      },
      error: (err) =>{
      alert(err.error);
      }
    })
  }

  verifyAdhaar() {
  if(this.verifyAdhaarForm.value.adhaarCard === null || this.verifyAdhaarForm.value.adhaarCard == undefined){
    this.verifyAdhaarForm.value.adhaarCard = ' ';
  }
   this.forexCardService.verifyAdhaar(this.verifyAdhaarForm.value.adhaarCard).subscribe({
    next:(data)=>{
      this.isAdhaarVerified = true;
    },
    error:(err)=>{
      alert(err.error);
    }
   });

  }
  verifyPassport(){
    if(this.verifyPassportForm.value.passport === null|| this.verifyPassportForm.value.passport == undefined){
      this.verifyPassportForm.value.passport = ' ';
    }
    this.forexCardService.verifyPassport(this.verifyPassportForm.value.passport).subscribe({
      next:(data)=>{
        alert('Documents Verified');
      },
      error:(err)=>{
        alert('Documents are not verified');
      }
    });
  }

  sendOTP() {
    this.isOtpSent = true;
   }
   
   verifyName(){
    if(this.userNameForm.value.name === null || this.userNameForm.value.name ===undefined){
      this.userNameForm.value.name = ' ';
    }
    if(this.verifyAdhaarForm.value.adhaarCard === null || this.verifyAdhaarForm.value.adhaarCard == undefined){
      this.verifyAdhaarForm.value.adhaarCard = ' ';
    }

    const adhaar:AdhaarCardDto = new AdhaarCardDto(this.userNameForm.value.name, this.verifyAdhaarForm.value.adhaarCard)
    this.forexCardService.verifyName(adhaar).subscribe({
      next:(data)=>{
        alert(data);
      },
      error:(err)=>{
        alert(err.error);
      }
    })
   }
}

