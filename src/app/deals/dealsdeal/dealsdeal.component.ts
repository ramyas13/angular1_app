import { Component, OnInit } from '@angular/core';
import * as alldeals from "../deals.json";

@Component({
  selector: 'app-dealsdeal',
  templateUrl: './dealsdeal.component.html',
  styleUrls: ['./dealsdeal.component.css']
  
})
export class DealsdealComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  all:any=(alldeals as any).default;
}
