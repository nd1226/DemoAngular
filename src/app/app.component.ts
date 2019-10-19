import { Component, OnInit } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "shopping-cart";
  numberItems: number = 0;
  products: Product[];
  constructor(public productService: ProductService) {}
  ngOnInit() {
    this.products = this.productService.getProduct();
  }

  Subtotal: number = 8000000;
  Tax: number = 800000;
  Total: number = 8800000;
  handleApplyPromoCode(ev) {
    alert(ev);
  }

  onChangeQuantityHandler(event) {
    let list = event as Product[];
    this.numberItems = 0;
    list.forEach(element => {
      this.numberItems += element.quantity;
    });
  }
}
