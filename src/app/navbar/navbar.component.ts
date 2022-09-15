import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  //STRING INTERPOLATION
  title = 'Drizly';
  //PROPERTY BINDING
  public logo="https://th.bing.com/th/id/R.9d596606989f532c62ad9610c55bd26d?rik=sbnBxOF7P3t1tw&riu=http%3a%2f%2fcliparts.co%2fcliparts%2fpT7%2fa8L%2fpT7a8LjT9.jpg&ehk=LK42q7hCOvJLEJgw3EEI56Cckm3hM2Y5c3J%2fOBKd6nc%3d&risl=&pid=ImgRaw&r=0";
  //EVENT BINDING
  onSearch()
  {
    alert("Will contact shortly");
  }

  //Accessing the Search Component
  //Property
  productentered: string=' '  //Laptop

  //Event
  search_product(product_name:string):void{ //Laptop
    if(!product_name)
    {
      this.productentered=' ';
    }
    this.productentered=product_name; //Laptop
    console.log(product_name)
  }

  ngOnInit(): void {
  }

}