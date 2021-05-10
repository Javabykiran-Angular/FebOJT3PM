import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrls: ['./switch-directive.component.css']
})
export class SwitchDirectiveComponent implements OnInit {
choice:string='';
  constructor() { }

  ngOnInit() {
  }

  OnClick(value:string){
  //  value=value.trim();
  value=value.trim().toLowerCase();

    console.log("Color name is "+value);
    this.choice=value;
  }

}
