import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductBaseComponent } from './product-base/product-base.component';
import { ProductBaseModule } from './product-base/product-base.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductBaseModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
