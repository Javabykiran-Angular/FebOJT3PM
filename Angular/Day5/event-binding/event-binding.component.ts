import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  count:number=0;
  myflag:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    // if(this.count==0){
      if(this.myflag==true){
      console.log("Event Occur!!!");
      this.myflag=false;
    }    
    // this.count++;
  }

}
