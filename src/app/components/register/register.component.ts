import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PotentialCustomer } from 'src/app/dto/potential-customer';
import { RegistrationServiceService } from 'src/app/services/registration-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private resgistrationService : RegistrationServiceService, private router:Router){}
  
  ngOnInit(): void {}

  registrationForm = new FormGroup({
    email:new FormControl(),
    otp: new FormControl(),
  })

  _potentialCustomer : PotentialCustomer = new PotentialCustomer("","");
  

  sendOTP(){
    this._potentialCustomer.email = this.registrationForm.value.email;
    this.resgistrationService.sendOTP(this._potentialCustomer).subscribe({
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
