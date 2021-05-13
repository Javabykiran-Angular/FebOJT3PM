import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  str:string="Data from Parent....";
  parentjson={
    name:'sumit Tech',
    id:9,
    role:'Developer'
  }


  arrobj=[
    {
      name:'sumit Tech',
      id:9,
      role:'Developer'
    },
    {
      name:'Kiran Raokhande',
      id:6,
      role:'Marketing'
    },
    {
      name:'Spruha raokhande',
      id:3,
      role:'Admin'
    }
  ];

  myname:string='';

  datafromchild:string='';
  jsonfromChild={};

  childofchildData:string='';

  constructor() { }

  ngOnInit() {
  }

  onClick(value){
      this.myname=value;
  }

  onChild3(value11){
    this.childofchildData=value11;
  }

}
