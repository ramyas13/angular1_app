import { Component, OnInit } from '@angular/core';
import * as allprod from "../data/allproducts.json";
import { More } from '../more';
import { MoreService } from '../more.service';


@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  more: More[]=[];
  //constructor injection of the MicroovenServiceDeals
  constructor(private moreservice:MoreService) { }

  ngOnInit(): void {
    const moreObservable= this.moreservice.getMoreDetails();
    moreObservable.subscribe((moreData: More[])=>{
      this.more=moreData;
    });
  }

  all:any=(allprod as any).default;
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
