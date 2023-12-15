import { Component,OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { ApicallService } from 'src/app/apicall.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private param: ActivatedRoute, private service:ApicallService,private fb:FormBuilder){};
  getmenuId:any;
  menudata:any;
  ngOnInit():void{
    this.getmenuId=this.param.snapshot.paramMap.get('id');
    console.log(this.getmenuId,'getmenu');

      if(this.getmenuId){
          this.menudata =this.service.postarray.filter((value)=>{
            return value.id == this.getmenuId;
          })
      }
      this.menudata = this.menudata[0];
      console.log(this.menudata,'menudata');
  }

  check=false;
  submit=false;
  reg=this.fb.group({
    name:['',Validators.required],
    address:['',Validators.required],
    phone:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
  })

  get f(){
    return this.reg.controls;
  }
  onsubmit(){
    this.submit=true;  
    console.log(this.f,'controls')
    console.log(this.submit);
  }
  onclick(){
    this.check=true;
    console.log(this.check)
  }
 
}
