import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuildpipe',
  templateUrl: './inbuildpipe.component.html',
  styleUrls: ['./inbuildpipe.component.css']
})
export class InbuildpipeComponent implements OnInit {

  strdetails:string='sumit Raokhande angular Trainer';
  num2:number=65.678556;

  mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
