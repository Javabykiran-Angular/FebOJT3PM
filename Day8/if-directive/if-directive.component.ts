import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-directive',
  templateUrl: './if-directive.component.html',
  styleUrls: ['./if-directive.component.css']
})
export class IfDirectiveComponent implements OnInit {
result:number=0;
rating:number=21;
rating1:number=21;
  constructor() { }

  ngOnInit() {
  }

}
