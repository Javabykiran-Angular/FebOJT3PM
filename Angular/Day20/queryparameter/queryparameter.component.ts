import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap
    .subscribe((query)=>{
      console.log('Id:: '+query.get('id'));
      console.log('Lname :: '+query.get('lname'));
      console.log('Fname :: '+query.get('fname'));
    })
  }

}
