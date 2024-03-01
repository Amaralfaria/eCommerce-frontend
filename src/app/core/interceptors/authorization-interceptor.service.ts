import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationInterceptorService implements HttpInterceptor {

    constructor(private localStorageService: LocalStorageService){}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authToken = this.localStorageService.getItem('access_tkn');

    if(authToken === null){
        return next.handle(request);
    }

    // Clonar a requisição original e substituir o cabeçalho de autorização
    const authReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${authToken}`)
    });


    return next.handle(authReq);
  }
}