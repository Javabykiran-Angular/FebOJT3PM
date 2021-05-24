import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-myhttp',
  templateUrl: './myhttp.component.html',
  styleUrls: ['./myhttp.component.css']
})
export class MyhttpComponent implements OnInit {

  post=[];
  id:string='';
  title:string='';
  body:string='';
  ishidden:boolean=true;
  constructor(private service:HttpService) { }

  ngOnInit() {

    this.service.getAllPost()
    .subscribe((response)=>{
      console.log(response);
      this.post=(<any>response)
     // alert("Success..");
    },(error)=>{
    //  alert("Error Occured!...");

      if(error.status>=200 && error.status<=299){
        console.log("Success");
      }else if(error.status>=300 && error.status<=399){
        console.log("Redirection");
      }else if(error.status>=400 && error.status<=499){
        console.log("Client Side Error"+error.status);

      }else if(error.status>=500 && error.status<=599){
        console.log("Success");
      }else {
        alert('Url Incorrect');
      }


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

  onEdit(item){
      this.id=item.id;
      this.title=item.title;
      this.body=item.body;
      this.ishidden=false;

  }

  onUpdate(){

    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
        console.log(response);
        this.id='';
        this.title='';
        this.body='';
        this.ishidden=true;
    })
  }

  onDelete(id){
    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response);
    })

  }

}
