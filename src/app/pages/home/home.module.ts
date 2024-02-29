import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductBaseModule } from '../../modules/product-base/product-base.module';

@NgModule({
  imports: [
    CommonModule, ProductBaseModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
