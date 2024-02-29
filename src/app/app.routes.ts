import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/product-base/pages/home-page/home-page.component';
import { ProductPageComponent } from './modules/product-base/pages/product-page/product-page.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
        pathMatch: 'full',
    },
    {
        path: 'product/:idProduct',
        component: ProductPageComponent,
        pathMatch: 'full'
    }
];
