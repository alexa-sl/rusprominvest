import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IOrder} from "../interfaces/IOrder";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) {}

  putOrder(data: IOrder) {
    const url = environment.apiUrl + '/orders';
    return this.http.post(url, data);
  }

  getOrders() {
    return this.http.get<IOrder[]>(environment.authApiUrl + '/auth/users', {withCredentials: true});
  }
}
