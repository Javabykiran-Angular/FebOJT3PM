import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  name:string='Sumit Raokhande';
  num1:number=5;
  flag:boolean=true;
  imageUrl:string="../../assets/Desert.jpg";


  constructor() { }

  ngOnInit() {
  }

  getname(){
    this.name='Kiran Raokhande';
    return this.name;
  }

}
