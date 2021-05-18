import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strdetails:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur facilis, iusto quibusdam culpa dignissimos aliquam quam veritatis earum odio voluptas. Ea reprehenderit maxime, molestiae magnam in exercitationem ipsum repellat vitae."
  constructor() { }

  ngOnInit() {
  }

}
