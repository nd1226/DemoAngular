import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-cart-price",
  templateUrl: "./cart-price.component.html",
  styleUrls: ["./cart-price.component.css"]
})
export class CartPriceComponent {
  promoCode: any;
  
  @Input() Subtotal: number;
  @Input() Tax: number;
  @Input() Total: number;
}
