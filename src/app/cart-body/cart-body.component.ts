import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../product.model";
@Component({
  selector: "app-cart-body",
  templateUrl: "./cart-body.component.html",
  styleUrls: ["./cart-body.component.css"]
})
export class CartBodyComponent {
  @Input() products: Product[];
  @Output() onChangeQuantity = new EventEmitter();
  numberItem: number;
  removeProduct(id: number) {
    const index = this.products.findIndex(product => product.id);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.numberItem = 0;
      for (let i = 0; index < this.products.length; i++) {
        this.numberItem += this.products[i].quantity;
      }
    }
  }
  changeQuantity(value: string,product : Product) {
    product.quantity = parseInt(value);
    this.onChangeQuantity.emit(this.products);
  }
}
