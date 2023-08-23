import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {IOrder} from "../interfaces/IOrder";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) {}

  putOrder(data: IOrder): Observable<any>{
    // const url = environment.apiUrl + '/orders';
    const url = environment.apiUrl + '/orders';
    console.log('test post', url);
    return this.http
      .post(url, data)
      .pipe(tap(res => console.log('response!', res, data)))

  }
}
