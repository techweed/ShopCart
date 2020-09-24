import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  constructor() { }
  Cart=[];
  public tprice=0;
  discount=0;
  firstname:string;
  address:string;
  address2:string;
  ind=0;
  phone:string;
  ca=0;
  len=0;
  ngOnInit() 
  {
    let cart = JSON.parse(sessionStorage.getItem('cart'));
this.len=cart.length;
    this.ca = parseInt(sessionStorage.getItem('tprice'));
    cart.forEach(element => {   
        this.Cart.push(element);
        this.tprice+=element.price;
        console.log(element.price);
      console.log(this.Cart);
    });
    this.discount=this.tprice*.2;
  }

  Navigate()
  {
  
  }
}
