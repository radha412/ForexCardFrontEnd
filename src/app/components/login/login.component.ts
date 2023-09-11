import { Component, OnInit, ɵsetAlternateWeakRefImpl } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { PotentialCustomer } from 'src/app/dto/potential-customer';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    useremail: new FormControl(),
    userPassword: new FormControl(),
  })
  
  constructor(private loginService: LoginServiceService, public router: Router) { }
  ngOnInit(): void {}
  potentialCustomerCredentials: PotentialCustomer = new PotentialCustomer("", "");
  onSubmit() {
    this.potentialCustomerCredentials.email = (this.loginForm.value.useremail);
    this.potentialCustomerCredentials.password = (this.loginForm.value.userPassword);
    this.loginService.login(this.potentialCustomerCredentials).
    subscribe({
      next:(data : string) =>{
        alert(data);
        this.router.navigate(['/login']);
      },
      error:(err) =>{
        alert("Admin is not verified");
        this.router.navigate(['login']);
      }
    })
   }
}

