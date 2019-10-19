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
  Subtotal: number = 0;
  Tax: number = 0;
  Total: number = 0;
  constructor(public productService: ProductService) {}
  ngOnInit() {
    this.products = this.productService.getProduct();
    this.getBill();
  }
  getBill() {
    this.products.forEach(element => {
      this.Subtotal += element.price * element.quantity;
    });
    this.Tax = (this.Subtotal * 10) / 100;
    this.Total = this.Tax + this.Subtotal;
  }
  handleApplyPromoCode(ev) {
    ev == "muathu"
      ? alert("Nhập mã giảm giá thành công")
      : alert("Mã giảm giá không tồn tại");
  }

  onChangeQuantityHandler(event) {
    let list = event as Product[];
    this.numberItems = 0;
    list.forEach(element => {
      this.numberItems += element.quantity;
    });
  }
}
