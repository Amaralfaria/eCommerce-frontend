import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../../models/product'
import { Observable } from 'rxjs';

const PRODUCT_API = 'http://127.0.0.1:8000/product/'

@Injectable({
    providedIn: 'root'
})
export class ProductService {

constructor(private http: HttpClient) { }

getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(PRODUCT_API + 'list/')
}

getSingleProduct(idProduct: number): Observable<Product>{
    return this.http.get<Product>(PRODUCT_API + `one/${idProduct}`)
}

getSellerProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(PRODUCT_API + 'list/my_products')
}

}
