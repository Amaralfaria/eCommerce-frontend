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
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { ReviewService } from './services/review.service';
import { FormsModule } from '@angular/forms';
import { ReviewFormComponent } from './review-form/review-form.component';
import { SellerProductsPageComponent } from './pages/seller-products-page/seller-products-page.component';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, RouterModule, FormsModule
  ],
  exports: [
    ProductListComponent, ProductInfoComponent
  ],
  declarations: [ProductBaseComponent, ProductListComponent, ProductDetailComponent, ProductInfoComponent, HomePageComponent, ProductPageComponent, ReviewListComponent, ReviewDetailComponent, ReviewFormComponent, SellerProductsPageComponent],
  providers: [ProductService, ReviewService]
})
export class ProductBaseModule { }
