import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  constructor() { }

  @Input()product:any

  ngOnInit(): void {
  }
  //Toggle effect to show and hide the pdescription and price
  //Property for toggle effect
  productDetails=false;
  //Event to perform the toggle effect
  showproductDetailsToggle()
  {
    this.productDetails=!this.productDetails;
  }
  //function to toggle between the span content from + to - and vice versa
  //and bind the function to [ngClass]
  toggleContent(){
    var content='';
    if(this.productDetails){
      content='fa fa-plus';
    }
    else{
      content='fa fa-minus';
    }
    return content;
  }

}

