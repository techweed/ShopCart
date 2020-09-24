import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  response:any;
  tempStore:any;
  category:any;
  tprice=0;
  products;
  carr=[];

  constructor(private http: HttpClient,private route:ActivatedRoute) { 
    }
  
  ngOnInit() 
  {
    var ca = sessionStorage.getItem('cart');
    var result = ca.slice(1, -1);
    var carr = result.split(',');
    this.http.get("./src/assets/products.json").subscribe(
      (response)=>{
        let prods:any=response;
        prods.forEach(element => {
          for(let i=0;i<carr.length;i++)
          {

          if(element.Id==carr[i])
          {     
             this.tprice=this.tprice+element.price;   
             sessionStorage.setItem('tprice',JSON.stringify(this.tprice))  
            if(this.products==null)
            {
              this.products=[];  
            }
            this.products.push(element);
            console.log(this.products);
          }
        }
        });
      }
    )
  }
  remove(id:any){
    var ca = sessionStorage.getItem('cart');
    var result = ca.slice(1, -1);
    var carr = result.split(',');
    for(var i = carr.length - 1; i >= 0; i--) {
      if(carr[i] == id) {
        carr.splice(i, 1);
      }
  }
    var b = carr.map(Number);
    sessionStorage.setItem('cart',JSON.stringify(b))
    location.reload();
  }
}
