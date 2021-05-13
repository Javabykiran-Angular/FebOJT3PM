import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child3-of-child1',
  templateUrl: './child3-of-child1.component.html',
  styleUrls: ['./child3-of-child1.component.css']
})
export class Child3OfChild1Component implements OnInit {


   @Output() childofChildEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSend(value){
    this.childofChildEvent.emit(value);
  }

}
