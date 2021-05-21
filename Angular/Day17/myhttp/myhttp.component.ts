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

  onSend(mytitle,mybody){
    console.log(mytitle+" "+mybody);

    let obj={
      title:mytitle.value,
      body:mybody.value
    }

    this.service.PostData(obj)
    .subscribe((response)=>{
      console.log(response);
      mytitle.value='';
      mybody.value='';
      // mytitle.style.background='red';
    })


  }

}
