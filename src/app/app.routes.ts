import { Routes } from '@angular/router';
import { HomePageComponent } from './modules/product-base/pages/home-page/home-page.component';
import { ProductPageComponent } from './modules/product-base/pages/product-page/product-page.component';
import { SignInPageComponent } from './modules/auth/pages/sign-in-page/sign-in-page.component';
import { SellerProductsPageComponent } from './modules/product-base/pages/seller-products-page/seller-products-page.component';
import { ClientPurchasesPageComponent } from './modules/purchases/pages/client-purchases-page/client-purchases-page.component';

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
    },
    {
        path: 'sign-in',
        component: SignInPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'my-products',
        component: SellerProductsPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'my-purchases',
        component: ClientPurchasesPageComponent,
        pathMatch: 'full'
    }
];
