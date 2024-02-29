import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBaseComponent } from './product-base.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, RouterModule
  ],
  exports: [
    ProductListComponent, ProductInfoComponent
  ],
  declarations: [ProductBaseComponent, ProductListComponent, ProductDetailComponent, ProductInfoComponent, HomePageComponent, ProductPageComponent],
  providers: [ProductService]
})
export class ProductBaseModule { }
