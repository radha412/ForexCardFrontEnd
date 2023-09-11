import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../dto/admin';
import { ForexCardType } from '../dto/forex-card-type';
import { Complaint } from '../dto/complaint';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  base_url="http://localhost:8091/admin"
  base_url_forex = "http://localhost:8091/forexcarddetail";

  constructor(private httpClient:HttpClient) { }

  addAdmin(admin:Admin,id: number){
    return this.httpClient.post(`${this.base_url}/${id}`,admin);
  }

  addAdminNew(admin:Admin){
    return this.httpClient.post(`${this.base_url}`,admin);
  }

  addForexType(forexCardType: ForexCardType):Observable<ForexCardType> {
    return this.httpClient.post(`${this.base_url_forex}`,forexCardType);
  }

  getAllForexType(): Observable<ForexCardType[]>{
    return this.httpClient.get<ForexCardType[]>("http://localhost:8091/forexcarddetails");
  }

  getForexCardTypeById(id: number):Observable<ForexCardType> {
    return this.httpClient.get<ForexCardType>(`${this.base_url_forex}/${id}`);
  }


  getAllAdmins():Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.base_url}`);
  }

  getAllComplaints() :Observable<Complaint[]>{
    return this.httpClient.get<Complaint[]>("http://localhost:8091/allComplaints");
  }

  updateForexCard(forexcarddetail:ForexCardType):Observable<ForexCardType> {
    return this.httpClient.post<ForexCardType>("http://localhost:8091/forexcarddetail",forexcarddetail);
  }

  deleteForexTypeById(id: number):Observable<ForexCardType>  {
    return this.httpClient.delete<ForexCardType>(`${this.base_url_forex}/${id}`);
  }

}
