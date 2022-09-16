import { Component, OnInit } from '@angular/core';
import * as annivarsary from '../data/annivarsary.json'

@Component({
  selector: 'app-annivarsary',
  templateUrl: './annivarsary.component.html',
  styleUrls: ['./annivarsary.component.css']
})
export class AnnivarsaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //Fetch the data from refrigerator.json using the alias refrigerator in line nnumber 4
  fridge:any=(annivarsary as any).default;

  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetail=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }
}


