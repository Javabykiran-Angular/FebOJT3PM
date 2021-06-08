import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  EmpData:any[]=[];
  constructor(private router:Router,
      private service:MyhttpService
    ) { }

  ngOnInit() {
    this.GetAllEmployee();
  }

  GetAllEmployee(){

    this.service.getAllData()
    .subscribe((response)=>{
      console.log(response);
      this.EmpData=(<any>response);
    })

  }

  onAddEmployee(){
    this.router.navigate(['/addEmployee'])
  }

}
