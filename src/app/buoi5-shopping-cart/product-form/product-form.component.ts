import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"]
})
export class ProductFormComponent implements OnInit {
  @ViewChild("formAdd", { static: true }) formAddProduct: NgForm;
  constructor() {}
  handleSubmit(formAdd: NgForm): void {
    console.log(formAdd);
    console.log(formAdd.value);
  }
  handleDemoEdit(): void {
    let productEdit = {
      name: "Oppo R123u23409",
      image: "https://cdn.tgdd.vn/Products/Images/42/182153/oppo-f9-red-1.jpg",
      description: "Sản phẩm của china",
      price: 450,
      inventory: 10,
      rating: 3
    };
    this.formAddProduct.setValue(productEdit);
    this.formAddProduct.reset();
    this.formAddProduct.resetForm();

  }

  ngOnInit() {}
}
