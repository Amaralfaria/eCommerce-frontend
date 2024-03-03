import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../services/product.service';
import { ProductSource } from '../enums/product-source.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  @Input()
  product_source!: ProductSource;


  products!: Product[];


  constructor(private productService: ProductService) { }

  ngOnInit() {
    if(this.product_source === ProductSource.SELLER_PRODUCTS){
      this.getSellerProducts();
    }else{
      this.getGeneralProducts();
    }
  }

  getSellerProducts(){
    this.productService.getSellerProducts().subscribe((data: any) => {
      this.products = data;
    })
  }

  getGeneralProducts(){
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    })
  }
}
