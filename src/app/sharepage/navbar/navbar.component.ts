import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private cartserv:CartService){}
  count=0;
  ngOnInit(){
    this.cartserv.GetProduct().subscribe(res=>{
      this.count=res.length;
    })
  }
}
