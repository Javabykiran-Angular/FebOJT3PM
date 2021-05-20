import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-myhttp',
  templateUrl: './myhttp.component.html',
  styleUrls: ['./myhttp.component.css']
})
export class MyhttpComponent implements OnInit {

  post=[];
  constructor(private service:HttpService) { }

  ngOnInit() {

    this.service.getAllPost()
    .subscribe((response)=>{
      console.log(response);
      this.post=(<any>response)
    });
    
    
  }

}
