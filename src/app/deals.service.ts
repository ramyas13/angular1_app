import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//access deals.ts
import { Deals } from './deals';
@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor() { }
  deal:Deals[] = [
{
    pid:1,
    pname:"Special Birthday gift",
    pdescription:"Surprise your fav",
    price:500,
    img:''
},
{
  pid:1,
  pname:"Special Birthday gift",
  pdescription:"Surprise your fav",
  price:500,
  img:''
},
{
  pid:1,
  pname:"Special Birthday gift",
  pdescription:"Surprise your fav",
  price:500,
  img:''
},
{
  pid:1,
  pname:"Special Birthday gift",
  pdescription:"Surprise your fav",
  price:500,
  img:''
},
{
  pid:1,
  pname:"Special Birthday gift",
  pdescription:"Surprise your fav",
  price:500,
  img:''
},
{
  pid:1,
  pname:"Special Birthday gift",
  pdescription:"Surprise your fav",
  price:500,
  img:''
}
  ];

  public getDealsDetails():any{
    const dealObservable=new Observable(observe=>{
      setTimeout(()=>{
        observe.next(this.deal);
      }, 2000);
      });
      return dealObservable;
  }
}
