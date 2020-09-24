import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  response:any;
  tempStore:any;
  category:any;
  products;
  cart=[];
  constructor(private http: HttpClient,private route:ActivatedRoute) { 
    let p=JSON.parse(sessionStorage.getItem('cart'));
    if(p!=null){
      for(let i=0;i<p.length;i++)
      this.cart.push(p[i]);
    }
  }

  ngOnInit() 
  {
    this.category=this.route.snapshot.paramMap.get('category');
    this.FetchFilter(this.category);
  }
  FetchFilter(cat:any)
  {
    this.http.get("./src/assets/products.json").subscribe(
      (response)=>{
        let prods:any=response;
        prods.forEach(element => {
          if(element.cat_name==cat)
          {
            if(this.products==null)
            {
              this.products=[];  
            }
            this.products.push(element);
            console.log(this.products);
          }
        });
      }
    )
  }

  addToCart(id:any){
    let e=JSON.parse(sessionStorage.getItem('CurUser'));

	    if(e!=null){
        let p=JSON.parse(sessionStorage.getItem('cart'));
        if(p==null){
          this.cart.push(id);
          sessionStorage.setItem('cart',JSON.stringify(this.cart))
        }
          else if(p.includes(id)){
            alert("product already in the cart");
          }
          else{
            this.cart.push(id);
            sessionStorage.setItem('cart',JSON.stringify(this.cart))
          }
        }      

      else{
        let s=document.getElementById('userSignIn') as HTMLElement;
				s.click();
      }
  }
}