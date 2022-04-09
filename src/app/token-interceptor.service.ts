import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: 'Bearer xx.yy.zz'
      }
    })
    return next.handle(tokenizedRequest);
  }
}
