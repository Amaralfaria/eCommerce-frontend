import { Component, OnInit } from '@angular/core';
import { ProductSource } from '../../enums/product-source.enum';

@Component({
  selector: 'app-seller-products-page',
  templateUrl: './seller-products-page.component.html',
  styleUrls: ['./seller-products-page.component.css']
})
export class SellerProductsPageComponent implements OnInit {
  ProductSource = ProductSource;

  constructor() { }

  ngOnInit() {
  }

}
