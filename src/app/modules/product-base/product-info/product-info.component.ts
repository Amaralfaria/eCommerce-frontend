import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  private idProduct!: number;
  product!: Product; 
  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.idProduct = parseInt(this.route.snapshot.paramMap.get('idProduct')!);
    this.productService.getSingleProduct(this.idProduct).subscribe((data: Product) => {
      this.product = data;
    })
  }

}
