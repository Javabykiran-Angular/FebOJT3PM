import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  myclass:string='success';
  rating:number=2;
  iserror:boolean=true;
  isSpecial:boolean=true;

  obj={
    "success":this.iserror,
    "danger" :!this.iserror,
    "special" : this.isSpecial
  };


  constructor() { }

  ngOnInit() {
  }

}
