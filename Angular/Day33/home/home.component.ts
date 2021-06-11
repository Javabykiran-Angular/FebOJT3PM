import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../EmployeeInterface';
import { MyhttpService } from '../myhttp.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  EmpData:any[]=[];
  p:number=1;

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

isradioChecked:boolean=false;

modalRef: BsModalRef;
config = {
  animated: true,  
  ignoreBackdropClick: true,
  class: "alert alert-danger"
};

nameSearch:string='';

  constructor(private router:Router,
      private service:MyhttpService,
      private modalservice:BsModalService
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

  onRadio(item){
    console.log("Radio is checked..."+item);
    this.empobj=item;
  //  console.log(this.empobj);
    this.isradioChecked=true;
  }

  isRadioChecked():boolean{
    
    if(this.isradioChecked==true){
      return true;
    }else{
      return false;
    }
    
  }


  onUpdateEmployee(popup: TemplateRef<any>){
    console.log(this.empobj);

    if(this.isRadioChecked()){
      this.modalRef=this.modalservice.show(popup,this.config)
    }else{
      alert("Please Select the Employee to update...");
    }

  }

}
