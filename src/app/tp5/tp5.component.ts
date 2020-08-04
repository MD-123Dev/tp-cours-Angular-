import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-tp-d",
  templateUrl: "./tp5.component.html",
  styleUrls: ["./tp5.component.css"],
})
export class Tp5Component implements OnInit {
  constructor() {}

  ngOnInit() {}
  isSelected=true;

  produits = [
    { id: 1, NomProd: "pc" },
    { id: 2, NomProd: "clavier" },
    { id: 3, NomProd: "ecran" },
    { id: 4, NomProd: "sories" },
  ];

  save() {
    this.produits.push({ id: 5, NomProd: "laptop" });
  }

  Remove(produit) {
    let index = this.produits.indexOf(produit);
    this.produits.splice(index, 1);
  }

  favorite() {
    this.isSelected=false;
  }
}
