import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  mycolor = 'red';
  
  productdetails = [
    {
      "pid": "1",
      "image": "assets/card1.jpeg",
      "pname": "Birthdaygift",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Instock",
      
    },
    {
      "pid": "2",
      "image": "assets/card1.jpeg",
      "pname": "Annivarsarygift",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Out of Stock",
    },
    {
      "pid": "3",
      "image": "assets/card1.jpeg",
      "pname": "Chocolate",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Instock",
      
    },
    {
      "pid": "4",
      "image": "assets/card1.jpeg",
      "pname": "Plants",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Instock",
      
    },
    {
      "pid": "5",
      "image": "assets/card1.jpeg",
      "pname": "Cakes",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Out of Stock",
      
    },
    {
      "pid": "6",
      "image": "assets/card1.jpeg",
      "pname": "Customizedgift",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Instock",
      
    },
    {
      "pid": "7",
      "image": "assets/card1.jpeg",
      "pname": "Flowers",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Instock",
      
    },
    {
      "pid": "8",
      "image": "assets/card1.jpeg",
      "pname": "Hampers",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Out of Stock",
      
    },
    {
      "pid": "9",
      "image": "assets/card1.jpeg",
      "pname": "Babygifts",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Instock",
      
    },
  ]

  prod_array:string[]=['blue','shadow'];
  
  ngOnInit(): void {
  }

}

