import { Component } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private serv:ApicallService,private cartserv:CartService){}
  public postarray:any=[];
  public len:number=0;
  public num:number=1;
  subtotal:number=0;
  ngOnInit(){
    this.cartserv.GetProduct().subscribe(res=>{
      this.postarray=res;
      this.len=res.length;

    })
    this.cartserv.Totalprice.subscribe(res=>{
      this.subtotal=res;
    })
  }

  RemoveFromCart(item:any){
    this.cartserv.RemoveFromCart(item);
  }

  
  incriment(item:any){
    this.cartserv.incriment(item);
    
  }
  decriment(item:any){
    this.cartserv.decriment(item)
    

  }
}
