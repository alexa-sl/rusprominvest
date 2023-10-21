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
    const ruDomain = 'https://rusprominwest.ru';
    const rfDomain = 'https://xn--b1aghpgdghbiimc.xn--p1ai';
    const getDomain = function(string: string, subString: string, index: number) {
      return string.split(subString, index).join(subString);
    };
    const originalDomain = getDomain(req.url, '/', 3);

    const replacedUrl = req.url.replace(originalDomain, ruDomain);
    let updReq = req;

    if (originalDomain === rfDomain) {
      updReq = req.clone({url: replacedUrl});
    }

    return next.handle(updReq);
  }
}
