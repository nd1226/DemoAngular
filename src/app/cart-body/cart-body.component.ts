import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../product.model";
@Component({
  selector: "app-cart-body",
  templateUrl: "./cart-body.component.html",
  styleUrls: ["./cart-body.component.css"]
})
export class CartBodyComponent {
  @Input() products: Product[];
  removeProduct(id: number) {
    const index = this.products.findIndex(product => product.id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
  changeQuantity(value: string) {
    console.log(value);
  }
}
