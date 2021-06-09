import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../EmployeeInterface';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id:number;

  empobj:Employee={
    id:0,
      name:'',
      departmentit:'',
      status:'',
      phoneno:0,
      country:{
        cid:0,
        cname:''
      },
      createddtm:0,
      createdby:'',
      updateddtm:0,
      updatedby:''
  };

  constructor(private route:ActivatedRoute,
    private service:MyhttpService
    ) { }

  ngOnInit() {
    this.GetDataFromURL();
  }

  GetDataFromURL(){
      this.route.paramMap
      .subscribe((param)=>{
        this.id=+param.get('id');
        
        this.GetParticularEmployeeData(this.id)

      })
  }

  GetParticularEmployeeData(id){
      this.service.getParticularEmp(id)
      .subscribe((response)=>{
          console.log(response);
          this.empobj=(<any> response);
      })
  }

}
