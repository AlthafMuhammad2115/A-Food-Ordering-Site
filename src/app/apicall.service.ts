import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  public postarray=[
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Paneer Grilled Sandwich: A mouthwatering delight, featuring succulent paneer and aromatic spices, perfectly grilled between layers of buttered bread. Irresistibly flavorful.",
      foodPrice:200,
      count:1,
      subtotal:200,
      foodImg:"../assets/food8.webp"
    },
    {
      id:2,
      foodName:"Veggie Supreme",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice:369,
      count:1,
      subtotal:369,
      foodImg:"../assets/food6.webp"
    },
    {
      id:3,
      foodName:"Paneer Burger",
      foodDetails:"Paneer burger: A scrumptious vegetarian delight featuring a succulent paneer patty, fresh veggies, and zesty sauces, perfect for burger lovers.",
      foodPrice:149,
      count:1,
      subtotal:149,
      foodImg:"../assets/food2.jpg"
    },
    {
      id:4,
      foodName:"Veg Masala Roll In Naan",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice:140,
      count:1,
      subtotal:140,
      foodImg:"../assets/food7.webp"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice:105,
      count:1,
      subtotal:105,
      foodImg:"../assets/food5.webp"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:" frozen delight that marries velvety vanilla ice cream with generous chunks of Oreo cookies, creating a perfect blend of sweetness and crunch in every spoonful.",
      foodPrice:219,
      count:1,
      subtotal:219,
      foodImg:"../assets/food9.webp"
    },
    
  ]
}
