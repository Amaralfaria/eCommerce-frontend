import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBaseComponent } from './product-base.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [
    ProductBaseComponent
  ],
  declarations: [ProductBaseComponent, ProductListComponent, ProductDetailComponent],
  providers: [ProductService]
})
export class ProductBaseModule { }
