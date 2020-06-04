import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {observable,Observable} from 'rxjs'
const BaseUrl = 'http://localhost:8083/api/con/updateData';
const bUrl='http://localhost:8083/api/con/delet';
@Injectable({
  providedIn: 'root'
})
export class ConstructionServicesService {
  private baseUrl='http://localhost:8083';
  constructor(public http:HttpClient) {}

  userRegister(data){
    return this.http.post<any>(this.baseUrl + '/api/con/Create', data);
  }
  loginTest():Observable<any>{
    return this.http.get(this.baseUrl+'/api/con/allUser');
  }
  contact(data){
    return this.http.post<any>(this.baseUrl + '/api/con/contact', data);
  }
  update(email, data):Observable<any>{
    return this.http.put(`${BaseUrl}/${email}`, data);

  }
  delete(email):Observable<any>{
    return this.http.delete(`${bUrl}`,email);
  }
  get(email){
    return this.http.get(`${BaseUrl}/${email}`);

    // return this.http.get('http://localhost:8083/api/con/updateData/'+email);
  }

}
