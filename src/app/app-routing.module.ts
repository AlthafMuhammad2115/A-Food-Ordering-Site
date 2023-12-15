import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './contentpage/home/home.component';
import { LoginComponent } from './contentpage/login/login.component';
import { CartComponent } from './contentpage/cart/cart.component';
import { MenuComponent } from './contentpage/menu/menu.component';
import { ProductComponent } from './contentpage/product/product.component';



const routes: Routes = [
{path:'',component:HomeComponent},
{path:'Login',component:LoginComponent},
{path:'cart',component:CartComponent},
{path:'menu',component:MenuComponent},
{path:'menu/:id',component:ProductComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
