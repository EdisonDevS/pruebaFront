import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UrlInterceptor<T> implements HttpInterceptor {
  intercept(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<any>> {

    const request = req.clone({
      url: environment.API  + req.url
    });

    return next.handle(request);
  }
}
