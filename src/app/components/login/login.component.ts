import { Component, OnInit, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { FormGroup, FormControl, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { PotentialCustomer } from 'src/app/dto/potential-customer';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  errorMessage:string = '';
  successMessage:string = '';
  getErrorMessage() {
    throw new Error('Method not implemented.');
  }

  // loginForm = new FormGroup({
  //   useremail: new FormControl(),
  //   userPassword: new FormControl(),
  // })

  loginForm: FormGroup;

  constructor(private loginService: LoginServiceService, public router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      useremail : ['', [Validators.required, Validators.email]],
      userPassword:['', [Validators.required, Validators.minLength(3)]],
   });
}

  get loginFormControl() {
    return this.loginForm.controls;
  }
  ngOnInit(): void { }
  potentialCustomerCredentials: PotentialCustomer = new PotentialCustomer("", "");

  onSubmit() {
    this.potentialCustomerCredentials.email = (this.loginForm.value.useremail);
    this.potentialCustomerCredentials.password = (this.loginForm.value.userPassword);

    this.loginService.login(this.potentialCustomerCredentials).
      subscribe({
        next: (data: string) => {
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.errorMessage = error.error;
          this.successMessage = '';
          this.router.navigate(['login']);
        }
      })
  }
}

/* Possible errors
email is not registered
password is wrong
wrong email
*/