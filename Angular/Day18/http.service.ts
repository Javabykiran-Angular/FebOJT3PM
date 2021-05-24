import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  private url:string="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  getAllPost(){
    return (this.http.get(this.url));
  }

  PostData(obj:any){
     return  (this.http.post(this.url,obj));
  }

  UpdateData(obj){
    // https://jsonplaceholder.typicode.com/posts/3
    // https:localhost:8080/api/getemployeebyid/
    return (this.http.put(`${this.url}/${obj.id}`,obj));
  }

  DeleteData(id){
      return (this.http.delete(`${this.url}/${id}`));
  }


}
