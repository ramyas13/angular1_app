import { Component, OnInit } from '@angular/core';
import * as productdetails from '../data/first.json';
@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  product:any = (productdetails as any).default;

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
      content='fa fa-low-vision';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }
}


