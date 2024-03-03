import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from '../../../models/purchase';

const PURCHASE_API = 'http://127.0.0.1:8000/purchase/'

@Injectable({
    providedIn: 'root'
})
export class PurchaseService {

constructor(private http: HttpClient) { }

getPurchases(): Observable<Purchase[]>{
    return this.http.get<Purchase[]>(PURCHASE_API + 'list/')
}

}
