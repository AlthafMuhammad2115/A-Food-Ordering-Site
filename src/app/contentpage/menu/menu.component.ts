import { Component,OnInit } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  constructor(private api:ApicallService,private cartserv:CartService){};
  array:any;
  ngOnInit():void{
    this.array=this.api.postarray;
  }

  AddToCart(item:any){
    this.cartserv.AddToCart(item);
  }
}
