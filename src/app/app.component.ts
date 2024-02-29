import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductBaseModule } from './modules/product-base/product-base.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './pages/home/home.module'
import { ProductPageModule } from './pages/product-page/product-page.module'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule,RouterOutlet, HomeModule, ProductPageModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
