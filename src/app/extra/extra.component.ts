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
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
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


