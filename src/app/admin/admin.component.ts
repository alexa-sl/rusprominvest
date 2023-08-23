import {Component, OnInit} from '@angular/core';
import {OrderService} from "../shared/services/order.service";
import {Observable} from "rxjs";
import {IOrder} from "../shared/interfaces/IOrder";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  constructor(
    private orderService: OrderService
  ) {};
  orders$: Observable<[IOrder]>;

  ngOnInit() {
    this.orders$ = this.orderService.getOrders();
  }
}
