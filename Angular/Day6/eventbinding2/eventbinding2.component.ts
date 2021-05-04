import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onImageClick(){
    console.log("On Image Click....");
  }
  onLogin(myevent){
    console.log(myevent);
    console.log("Message ==> "+myevent.target.value)
  }

  onChange(){
    console.log("Change Event Occur!!!")
  }

  onSend(myinput){
    console.log(myinput);
    console.log("Data is "+myinput.value);
    myinput.value="";
  }

  onSend1(myvalue){
    console.log(myvalue);    
  }

  onMychange(username){
    username.style.background="green";
  }

}
