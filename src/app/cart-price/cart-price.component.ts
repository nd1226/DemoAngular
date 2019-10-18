import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-price',
  templateUrl: './cart-price.component.html',
  styleUrls: ['./cart-price.component.css']
})
export class CartPriceComponent {
 Subtotal:number = 80000000;
 Tax : number = 8000000;
 Total : number = 88000000
}
