import { Component, Input, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  @Input() parentdata={
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

  issubmitDissabled:boolean=true;
  backendResponse:string='';
  allCountry=[];


  constructor(private service:MyhttpService) { }

  ngOnInit() {
    this.GetAllCountry();
  }

  GetAllCountry(){
    this.service.getAllCountry()
    .subscribe((response)=>{
      this.allCountry=(<any>response);
    });
  }

  onupdate(){


    this.parentdata.updatedby=sessionStorage.getItem("username");
    this.parentdata.updateddtm=Date.now();
    // console.log(this.parentdata);
    console.log("CID "+this.parentdata.country.cid);
    console.log("CNAME "+this.parentdata.country.cname);


    this.service.UpdateEmployee(this.parentdata)
    .subscribe((response)=>{
      this.backendResponse=response;
      this.issubmitDissabled=false;
    })

  }


}
