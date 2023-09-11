import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PotentialCustomer } from 'src/app/dto/potential-customer';
import { RegistrationServiceService } from 'src/app/services/registration-service.service';
import { Router } from '@angular/router';
import { OTPDto } from 'src/app/dto/OTPDto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  isOTPSent?: boolean = false;
  isOTPVerified?: boolean = false;
 // registrationForm:FormGroup ;
  otpVerificationForm:FormGroup;
  setPasswordForm:FormGroup;
  constructor(private resgistrationService: RegistrationServiceService, private router: Router, private formBuilder : FormBuilder)
   { 
    // this.registrationForm = this.formBuilder.group({
    //   useremail:['', Validators.required, Validators.email]
    // })

    this.otpVerificationForm = this.formBuilder.group({
      otp:['', Validators.minLength(6)]
    })

    this.setPasswordForm = this.formBuilder.group({
      password:['',Validators.required, Validators.minLength(3)]
    })
   }
  ngOnInit(): void { }

  registrationForm = new FormGroup({
    'useremail': new FormControl('',[Validators.required, Validators.email]),
  })

  get registrationFormControls(){
    return this.registrationForm.controls;
  }

  // otpVerificationForm = new FormGroup({
  //   otp: new FormControl(),
  // })

  get otpVerificationFormControl(){
   return this.otpVerificationForm.controls;
  }
  // setPasswordForm = new FormGroup({
  //   password: new FormControl()
  // })

  get setPasswordFormControl(){
    return this.setPasswordForm.controls;
  }

  _potentialCustomer: PotentialCustomer = new PotentialCustomer("", "");
  _otpDto: OTPDto = new OTPDto("");

  sendOTP() {
    console.log("sending otp");
    console.log(this.registrationForm.value );  
    if(this.registrationForm.value.useremail != undefined) 
    this._potentialCustomer.email = this.registrationForm.value.useremail; 
    this.resgistrationService.sendOTP(this._potentialCustomer).subscribe({
      next: (data: string) => {
        alert(data);
        this.isOTPSent = true;
      },
      error: (err) => {
        alert(err.error);
        this.router.navigate(['login']);
      }
    })
  }

  verifyOTP() {
    this._otpDto.customerEmail = "jainkumkum611@gmail.com";// this.registrationForm.controls['useremail'];
    this._otpDto.otp = this.otpVerificationForm.value.otp;
    this.resgistrationService.verifyOTP(this._otpDto).subscribe({
      next: (data: string) => {
        if (data === "Email Got Verified") {
          alert("verified");
          this.isOTPSent = false;
          this.isOTPVerified = true;
        }
      },
      error: (err) => {
        alert(err.message);
      }
    })
  }

  setPassword() {
    this._potentialCustomer.email = "jainkumkum611@gmail.com";//this.registrationForm.value.useremail;
    this._potentialCustomer.password = this.setPasswordForm.value.password;
    this.resgistrationService.setPassword(this._potentialCustomer).subscribe({
      next: (data: string) => {
        if (data === "Login Successfully") {
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        alert(err.message);
      }
    })
  }

}
