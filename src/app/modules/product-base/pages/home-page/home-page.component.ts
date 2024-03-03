import { Component, OnInit } from '@angular/core';
import { ProductSource } from '../../enums/product-source.enum';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  ProductSource = ProductSource

  constructor() { }

  ngOnInit() {
  }

}
