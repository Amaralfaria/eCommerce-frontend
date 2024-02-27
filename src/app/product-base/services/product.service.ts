import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const PRODUCT_API = 'http://127.0.0.1:8000/product/list/'

@Injectable({
    providedIn: 'root'
})
export class ProductService {

constructor(private http: HttpClient) { }

getProducts(){
    return this.http.get(PRODUCT_API)
}

}
