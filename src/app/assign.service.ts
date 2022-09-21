import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assign } from './assign';

@Injectable({
  providedIn: 'root'
})
export class AssignService {

  constructor() { }
  assign:Assign[] = [
    {
        id:1,
        pname:'Mysore Road, Jnana Bharathi, Bengaluru, Karnataka, 560056, India.',
        pemail:'web3214@gmail.com',
        pnumber:9574656437
    }
  ];
  public getAssignDetails():any{
    const assignObservable=new Observable(observe=>{
      setTimeout(()=>{
        observe.next(this.assign);
      }, 500);
      });
      return assignObservable;
  }
}
