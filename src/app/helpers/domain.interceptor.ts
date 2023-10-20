import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DomainInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const getDomain = function(string: string, subString: string, index: number) {
      return string.split(subString, index).join(subString);
    };

    const originalDomain = getDomain(req.url, '/', 3);
    const replacedDomain = 'https://rusprominwest.ru';
    const replacedUrl = req.url.replace(originalDomain, replacedDomain);
    const updReq = req.clone({ url: replacedUrl });

    return next.handle(updReq);
  }
}
