import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp-a',
  templateUrl: './tpb.component.html',
  styleUrls: ['./tpb.component.css']
})
export class TpbComponent implements OnInit {

  Datepersone = new Date(2020, 9, 20);//**pipe display value */
  nompersone = 'ali'
  
  textexp ="is simply dummy text of the printing and typesetting industry. Lorem Ipsum  "

  prix:number = 45237.555 ;

  Tel = '187936287' ;
  constructor() { }

  ngOnInit() {
  }

}
