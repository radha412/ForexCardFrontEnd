import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdhaarCardDto } from '../dto/AdhaarCardDto';

@Injectable({
  providedIn: 'root'
})
export class ForexCardService {
  
  constructor(private http:HttpClient) { }
 
  base_passport_url= "http://localhost:9090/passport-verification";
  base_adhaar_url = "http://localhost:9090/adhaar-card/verification"
  base_pancard_url = "http://localhost:9090/pancard/pancard-verification"
  base_adhaar_owner_url="http://localhost:9090/adhaar-card/owner-name";

  verifyAdhaar(adhaarNumber: string) :Observable<String>{
    return this.http.get(`${this.base_adhaar_url}/${adhaarNumber}`,{responseType: 'text'});
  }
  
  verifyPanCard(panCard: string):Observable<String>{ 
    return this.http.get(`${this.base_pancard_url}/${panCard}`,{responseType: 'text'});
  }

  verifyPassport(passport: string):Observable<String> {
    return this.http.get(`${this.base_passport_url}/${passport}`, {responseType : 'text'});
  }

  verifyName(adhaar: AdhaarCardDto):Observable<String>{
    return this.http.post(`${this.base_adhaar_owner_url}`,adhaar,{... Option, responseType: 'text'});
  }
}