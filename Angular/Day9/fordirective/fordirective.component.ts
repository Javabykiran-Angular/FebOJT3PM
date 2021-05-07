import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=['Angular 8','React Js','Vue Js','Embber JS','JSP'];

  arrobj=[
    {
      name:'Samsung',
      price:17000,
      quantity:2 
    },
    {
      name:'Motorolla',
      price:21000,
      quantity:1 
    },
    {
      name:'One Plus',
      price:30000,
      quantity:1 
    },
    {
      name:'iphone',
      price:54000,
      quantity:1 
    },
    {
      name:'Real Me',
      price:28000,
      quantity:1 
    }
  ];

  selected:string='';

  constructor() { }

  ngOnInit() {

  }

  onMouseOver(item){
    console.log("Mouse Over Event Occur!!!");

    this.selected=item.name;
  }

  onMouseOut(){
    this.selected='';
  }

}
