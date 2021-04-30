import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  mycolor:string='red';
  mycolor1:string='green';
  rating:number=21;
  rating1:number=2;
  rating2:number=21;

  obj={
    color:'orange',
    fontStyle:'italic',
    "font-family":'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
    'font-size':'38px'
  };

  obj1={
    color:'red',
    fontStyle:'italic',
    "font-family":'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
    'font-size':'38px'
  }


  constructor() { }

  ngOnInit() {
  }

}
