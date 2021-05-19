import { Component, OnInit } from '@angular/core';
import { MyService } from '../mycourse.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

CourseOBJ=[];

prodcut=[];

  constructor(private service:MyService) {

    // let service =new MyService();
  //  this.CourseOBJ=service.getCourse();

   }

  ngOnInit() {
    this.CourseOBJ=this.service.getCourse();
    this.prodcut=this.service.getArrObj();
  }

}
