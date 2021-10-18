import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  token: string;

  constructor(private cookieService: CookieService)
  {
    this.token = this.cookieService.get('token');
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (this.token) {
      req = req.clone({
        headers: req.headers.append('Authorization', 'Bearer ' + this.token)
      });
    }
    return next.handle(req);
  }
}