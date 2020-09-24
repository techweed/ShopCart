import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor() { }
  Cart=[];
  public tprice=0;
  discount=0;
  firstname:string;
  address:string;
  address2:string;
  ind=0;
  phone:string;
  ngOnInit() 
  {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach(element => {   
        this.Cart.push(element);
        this.tprice+=element.price;
        console.log(element.price);
      console.log(this.Cart);
    });
    this.discount=this.tprice*.2;
  }
  print()
  {
    window.print();
  }
}
