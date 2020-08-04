import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp-b',
  templateUrl: './tpa.component.html',
  styleUrls: ['./tpa.component.css']
})
export class TpaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  gmail:string = '';//**ngmodel get value from input */

  courses =[

      { id: 1,title:"Laravel"},
       { id: 2, title: "vuejs" },
        { id: 3, title: "reactjs" },
         { id: 4, title: "android" }
  ]

  Add(){
    //***add value passer from ng model to array  */
    this.courses.push({id:5,title:this.gmail});
    this.gmail='';
    
  }

  



}
