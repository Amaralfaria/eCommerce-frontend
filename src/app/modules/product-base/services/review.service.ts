import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../../models/review';

const REVIEW_API = 'http://127.0.0.1:8000/review/list/'

@Injectable({
    providedIn: 'root'
})
export class ReviewService {

constructor(private http: HttpClient) { }

getReviews(idProduct: number): Observable<Review[]>{
    return this.http.get<Review[]>(`${REVIEW_API}${idProduct}`)
}

}
