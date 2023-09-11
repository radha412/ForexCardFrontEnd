import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PotentialCustomer } from '../dto/potential-customer';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  //private baseUrl = 'http://localhost:8091';
  constructor(private http: HttpClient) { }

  login(_potentialCustomer: PotentialCustomer) : Observable<any>{
    return this.http.post("http://localhost:8091/potential-customer/login-credentials/", _potentialCustomer, {... Option, responseType: 'text'})
  }

}
