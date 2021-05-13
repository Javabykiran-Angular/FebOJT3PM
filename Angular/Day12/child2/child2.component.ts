import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

   @Output() childEvent=new EventEmitter();

   str:string="Data from child...";

    @Output() childEvent1=new EventEmitter();


   jsonobj={
     name:'sumit Raokhande',
     id:9,
     role:'Developer'
   }

  constructor() { }

  ngOnInit() {
  }

  onSend(){

       this.childEvent.emit(this.str);
       this.childEvent1.emit(this.jsonobj)
      
  }

}
