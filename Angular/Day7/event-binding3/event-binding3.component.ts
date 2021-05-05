import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding3',
  templateUrl: './event-binding3.component.html',
  styleUrls: ['./event-binding3.component.css']
})
export class EventBinding3Component implements OnInit {

  result:number;
  mycolor:string='red';
  mycolor2:string='orange'
  name:string='';
  constructor() { }

  ngOnInit() {
  }
  onKeyUp(){
    console.log("Key Up Event Occur...")
  }

  onKeyDown(){
    console.log("Key Down Event Occur...");
  }

  onAddition(num1,num2){
    let n1=+num1;
    let n2=+num2;

    console.log("Addition is "+(n1+n2));
    this.result=(n1+n2);

  }



}
