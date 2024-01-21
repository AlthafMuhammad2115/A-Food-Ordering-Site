import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private toast:ToastrService) { }

  public CartList:any=[];
  public ProductList=new BehaviorSubject<any>([]);
  public Totalprice=new BehaviorSubject<number>(0);

  GetProduct(){
    return this.ProductList.asObservable();
  }

  AddToCart(product:any){
    if(this.CartList.length!=0){
    let flag:number=this.CartList.find((a:any,index:number)=>{
      
      let temp=a.id==product.id;
      return temp
      

    })
    console.log("flag",flag)
    if(!flag){
    this.CartList.push(product);
    this.ProductList.next(this.CartList);
    console.log(this.CartList);
    }else{

      product.count++;
      console.log(product.count)
    }
  }else{
    this.CartList.push(product);
    this.ProductList.next(this.CartList);
    console.log(this.CartList);
  }

    this.subtotal(product);
    this.GetTotalPrice();
    this.toast.success("Succes","Item Addd to cart");
    
  }

  incriment(item:any){
    item.count++;
    this.subtotal(item);
    this.GetTotalPrice();
    return item.count;
  }
  decriment(item:any){
    if(item.count>=2){
      item.count--;
    }
    this.subtotal(item);
    this.GetTotalPrice();
    return item.count;
    

  }
  subtotal(item:any){
    item.subtotal=item.count*item.foodPrice;
  }

  
  GetTotalPrice(){
    let total=0;
    this.CartList.forEach((a:any) => {
      total+=a.subtotal;
    });
    this.Totalprice.next(total);
    total=0;
    return this.Totalprice.asObservable();
  }

  RemoveFromCart(product:any){
    this.CartList.map((a:any,index:number)=>{
      if(a.id===product.id){
        this.CartList.splice(index,1);
        product.count=1;
        this.ProductList.next(this.CartList);
      }
    }
    )
    this.GetTotalPrice();

  }

  RemoveAllFromCart(){
    this.CartList=[];
  }

}
