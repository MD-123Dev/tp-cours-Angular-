import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.css']
})
export class TpComponent implements OnInit {

  Title ="Tp 1 : ";
  dipslay = "hhhhh" ; //**value laison de propriter */

  isActive = true;//**class binding */

  isActiveColor = false;//**style binding s */
  
 

  onclick(ctrl){
    
    this.dipslay = ctrl.value;
  }

  

 
  constructor() { }

  ngOnInit() {
   
  }

}
