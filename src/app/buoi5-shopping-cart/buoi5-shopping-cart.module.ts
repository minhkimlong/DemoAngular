import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { CartComponent } from "./cart/cart.component";
import { CartItemComponent } from "./cart-item/cart-item.component";
import { ProductFormComponent } from "./product-form/product-form.component";

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,
    ProductFormComponent
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HomeComponent,
    ProductsComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent,
    ProductFormComponent
  ]
})
export class Buoi5ShoppingCartModule {}
