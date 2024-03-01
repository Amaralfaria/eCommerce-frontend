import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContentHeaderInterceptorService implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const contentTypeHeader = 'application/json';
    const modifiedRequest = request.clone({
      headers: request.headers.set('Content-Type', contentTypeHeader)
    });

    return next.handle(modifiedRequest);
  }
}