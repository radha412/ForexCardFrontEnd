import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PotentialCustomer } from '../dto/potential-customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {
  constructor(private http: HttpClient) { }

  sendOTP(_potentialCustomer: PotentialCustomer):Observable<string> {
    return this.http.post("http://localhost:8091/potential-customer/email-verification/", _potentialCustomer, {responseType:'text'});
  }
}
