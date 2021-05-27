import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-bootstrap',
  templateUrl: './demo-bootstrap.component.html',
  styleUrls: ['./demo-bootstrap.component.css']
})
export class DemoBootstrapComponent implements OnInit {

  arrobj=[
    {
      name:'oneplus',
      quantity:1,
      price:30000,
      description:'Good'
    },
    {
      name:'Motorola',
      quantity:1,
      price:20000,
      description:'Better'
    },
    {
      name:'RealMe',
      quantity:2,
      price:25000,
      description:'Good...'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
