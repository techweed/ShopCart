import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutusComponent} from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { DomesticComponent } from './domestic/domestic.component';
import { FashionComponent } from './fashion/fashion.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
{path:'aboutus', component:AboutusComponent},
{path:'footer', component:FooterComponent},
{path:'header', component:HeaderComponent},
{path:'main', component:MainComponent},
{path:'products/:category', component: ProductsComponent},
{path:'domestic', component:DomesticComponent},
{path:'fashion', component:FashionComponent},
{path:'cart', component:CartComponent},
{path:'checkout', component:CheckoutComponent},
{path:'invoice', component:InvoiceComponent},
{path:'', redirectTo: '/main', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
