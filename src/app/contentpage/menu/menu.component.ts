import { Component,OnInit } from '@angular/core';
import { ApicallService } from 'src/app/apicall.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  constructor(private api:ApicallService){};
  array:any;
  ngOnInit():void{
    this.array=this.api.postarray;
  }
}
