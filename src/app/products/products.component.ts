import { Component } from '@angular/core';

interface Products{
  title:String;
  icon:String;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  PRODUCTS : Array<Products>
  constructor(){
    this.PRODUCTS=[
      {title:'Business Litigation',icon:`bi bi-briefcase`},
      {title:'Elder Law Litigation',icon:`bi bi-people`},
      {title:'Real Estate Litigation',icon:`bi bi-houses`},
      {title:'Environmental Litigation',icon:`bi bi-globe-americas`},
      {title:'Government & Admin',icon:`bi bi-building`},
      {title:'Professional Litigation',icon:`bi bi-shield-shaded`},
      {title:'Finance Litigation',icon:`bi bi-graph-up-arrow`},
      {title:'Arbitration & Meditation',icon:`bi bi-peace`},
      {title:'Trust & Estate Litigation',icon:`bi bi-pen`},
    ]
  }
}
