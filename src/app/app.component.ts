import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductBaseModule } from './modules/product-base/product-base.module';
import { CommonModule } from '@angular/common';
import { AuthModule } from './modules/auth/auth.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule,RouterOutlet, ProductBaseModule, AuthModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
