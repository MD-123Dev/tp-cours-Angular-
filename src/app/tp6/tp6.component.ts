import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tp-e',
  templateUrl: './tp6.component.html',
  styleUrls: ['./tp6.component.css']
})
export class Tp6Component implements OnInit {

 
  payes =['marooc','france','Italia','Suise']
  constructor() { }

  ngOnInit() {
  }
 
  submit(form){
    console.log(form.value.Prenom);
  }
}
