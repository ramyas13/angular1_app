import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  mycolor = 'black';
  
  productDetails = [
    {
      "pid": 1,
      "image": "https://images-na.ssl-images-amazon.com/images/I/81QtKBPIBsL._SX1000_.jpg",
      "pname": "Birthday gift",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Instock",
      
    },
    {
      "pid": 2,
      "image": "https://cdn.shopify.com/s/files/1/1308/1459/products/per912-00120160122112453162_grande.jpg?v=1527390027",
      "pname": "Annivarsary gift",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Out of Stock",
    },
    {
      "pid": 3,
      "image": "https://th.bing.com/th/id/OIP.M2MoVTUZRF-2T2lVXH9E4AHaE7?pid=ImgDet&rs=1",
      "pname": "Chocolate",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Instock",
      
    },
    {
      "pid": 4,
      "image": "https://th.bing.com/th/id/OIP.ofTuHvJhOG-6GoYELY-QcwHaHX?pid=ImgDet&rs=1",
      "pname": "Plants",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Instock",
      
    },
    {
      "pid": 5,
      "image": "https://2.bp.blogspot.com/_Lan5_G4Spoo/TFHz-4eHpSI/AAAAAAAACyo/QLw1_u_buKg/s1600/IMG_3357.JPGa.jpgmm.jpg",
      "pname": "Cakes",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Out of Stock",
      
    },
    {
      "pid": 6,
      "image": "https://i.etsystatic.com/17038291/r/il/8c203f/2390952528/il_fullxfull.2390952528_5y68.jpg",
      "pname": "Customized gifts",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Instock",
      
    },
    {
      "pid": 7,
      "image": "https://willowfloristry.co.uk/wp-content/uploads/2020/12/2020-12-02.jpg",
      "pname": "Flowers",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Instock",
      
    },
    {
      "pid": 8,
      "image": "https://th.bing.com/th/id/OIP.dJiEWR9Vu_Hjy6RQAErVZwHaGq?pid=ImgDet&rs=1",
      "pname": "Hampers",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Out of Stock",
      
    },
    {
      "pid": 9,
      "image": "https://i.pinimg.com/originals/b5/68/b2/b568b278359ad1f2dd44d0eb48455fc3.jpg",
      "pname": "Baby gifts",
      "pdescription" : "Surprise your favourites on their day",
      "status": "Instock",
      
    }
  ]

  
  

  ngOnInit(): void {
  }

}

