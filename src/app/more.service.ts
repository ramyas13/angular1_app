import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { More } from './more';
@Injectable({
  providedIn: 'root'
})
export class MoreService {

  constructor() { }
  more:More[] = [
{
    pid:1,
    pname:"Special Birthday gift",
    pdescription:"Surprise your fav",
    price:500,
    img:'https://th.bing.com/th/id/OIP.BYuUgtA7HtAtQ9zVb_5QsQHaE6?pid=ImgDet&rs=1'
},
{
  pid:1,
  pname:"Special Birthday gift",
  pdescription:"Surprise your fav",
  price:500,
  img:'https://th.bing.com/th/id/OIP.BYuUgtA7HtAtQ9zVb_5QsQHaE6?pid=ImgDet&rs=1'
},
{
  pid:1,
  pname:"Special Birthday gift",
  pdescription:"Surprise your fav",
  price:500,
  img:'https://th.bing.com/th/id/OIP.BYuUgtA7HtAtQ9zVb_5QsQHaE6?pid=ImgDet&rs=1'
},
{
  pid:1,
  pname:"Special Birthday gift",
  pdescription:"Surprise your fav",
  price:500,
  img:'https://th.bing.com/th/id/OIP.BYuUgtA7HtAtQ9zVb_5QsQHaE6?pid=ImgDet&rs=1'
},
{
  pid:1,
  pname:"Special Birthday gift",
  pdescription:"Surprise your fav",
  price:500,
  img:'https://th.bing.com/th/id/OIP.BYuUgtA7HtAtQ9zVb_5QsQHaE6?pid=ImgDet&rs=1'
},
{
  pid:1,
  pname:"Special Birthday gift",
  pdescription:"Surprise your fav",
  price:500,
  img:'https://th.bing.com/th/id/OIP.BYuUgtA7HtAtQ9zVb_5QsQHaE6?pid=ImgDet&rs=1'
}
  ];

  public getMoreDetails():any{
    const moreObservable=new Observable(observe=>{
      setTimeout(()=>{
        observe.next(this.more);
      }, 2000);
      });
      return moreObservable;
  }
}