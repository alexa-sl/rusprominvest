import {Inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {DOCUMENT} from "@angular/common";

@Injectable()
export class DomainInterceptor implements HttpInterceptor {


  constructor(@Inject(DOCUMENT) private document: any) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const domain = this.document.location.hostname;
    const rfDomain = 'xn--b1aghpgdghbiimc.xn--p1ai';
    const rfDomainApi = 'https://xn--b1aghpgdghbiimc.xn--p1ai/';
    const getDomain = function(string: string, subString: string, index: number) {
      return string.split(subString, index).join(subString);
    };
    const reqDomain = getDomain(req.url, '/', 3);

    const replacedUrl = req.url.replace(reqDomain, rfDomainApi);
    let updReq = req;

    if (domain === rfDomain) {
      updReq = req.clone({url: replacedUrl});
    }

    return next.handle(updReq);
  }
}
