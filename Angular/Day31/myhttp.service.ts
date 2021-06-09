import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  baseUrl:string="http://localhost:8080/api/";

  constructor(private http:HttpClient) { }
  loginCheck(obj){
    return (this.http.post(`${this.baseUrl}logincheck`,obj));
  }

  getAllData(){
    return (this.http.get(`${this.baseUrl}getallemployee`))
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getallcountry`));
  }

  AddEmployee(obj){
     return (this.http.post(`${this.baseUrl}addemployee`,obj,{responseType:"text"}));
  }

  getParticularEmp(id){
     return (this.http.get(`${this.baseUrl}getemployeebyid/${id}`));
  }
  

}
