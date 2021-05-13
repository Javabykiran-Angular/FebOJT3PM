import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  data:string='';

  @Output() childd3Event=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCustomEvent(value1){
    console.log(value1);
    this.data=value1;
    this.childd3Event.emit(value1);
  }



}
