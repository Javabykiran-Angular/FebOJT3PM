import { Component, OnInit } from '@angular/core';
import { MyhttpService } from '../myhttp.service';

@Component({
  selector: 'app-add-empolyee',
  templateUrl: './add-empolyee.component.html',
  styleUrls: ['./add-empolyee.component.css']
})
export class AddEmpolyeeComponent implements OnInit {

  allCountry=[];
  constructor(private service:MyhttpService,
    ) { }

  ngOnInit() {
    this.GetAllCountry();
  }

  GetAllCountry(){
      this.service.getAllCountry()
      .subscribe((response)=>{
          console.log(response);
          this.allCountry=(<any>response);
      })

  }

  onSubmit(f){

    let empobj={
      name:f.value.name,
    departmentit:f.value.departmentit,
    status:f.value.status,
    phoneno:f.value.phoneno,
    country:{
      cid:f.value.country.cid,
      cname:f.value.country.cname

    },
    createddtm:Date.now(),
    createdby:sessionStorage.getItem("username"),
    updateddtm:Date.now(),
    updatedby:sessionStorage.getItem("username")
};

  this.service.AddEmployee(empobj)
  .subscribe((response)=>{
    console.log(response);
   // this.router.navigate(['/home']);

  })

  }



}
