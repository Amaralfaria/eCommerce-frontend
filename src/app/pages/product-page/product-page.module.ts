import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { ProductBaseModule } from '../../modules/product-base/product-base.module';

@NgModule({
  imports: [
    CommonModule, ProductBaseModule
  ],
  declarations: [ProductPageComponent]
})
export class ProductPageModule { }
