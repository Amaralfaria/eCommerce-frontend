import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductPageComponent } from './pages/product-page/product-page.component'

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'product/:idProduct',
        component: ProductPageComponent,
        pathMatch: 'full'
    }
];
