import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../../../models/review';

const REVIEW_API = 'http://127.0.0.1:8000/review/'

@Injectable({
    providedIn: 'root'
})
export class ReviewService {

constructor(private http: HttpClient) { }

getReviews(idProduct: number): Observable<Review[]>{
    return this.http.get<Review[]>(`${REVIEW_API}list/${idProduct}`)
}

postReview(review: Review): Observable<Review>{
    let review_data = JSON.stringify(review)
    return this.http.post<Review>(`${REVIEW_API}create/`, review_data);
}

}
