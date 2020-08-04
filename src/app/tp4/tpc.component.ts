import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp-c',
  templateUrl: './tpc.component.html',
  styleUrls: ['./tpc.component.css']
})
export class TpcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  produits = ['pc','clavier','ecran','sories'];

  isActive= false;

  onclick(){
    if (this.isActive) {
      this.isActive = false;
    }
    else
    this.isActive = true;
    
  }


}
