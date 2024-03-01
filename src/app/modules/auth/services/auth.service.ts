import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../models/user';

const AUTH_API = 'http://127.0.0.1:8000/user/login/'

@Injectable()
export class AuthService {

// headers: HttpHeaders;

constructor(private http: HttpClient) {
    // this.headers = new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     });
}

getJWT(user: User){
    let data = JSON.stringify(user);
    return this.http.post(AUTH_API, data)
}

}
