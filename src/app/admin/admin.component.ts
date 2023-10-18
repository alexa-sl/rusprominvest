import {Component, OnInit} from '@angular/core';
import {OrderService} from "../shared/services/order.service";
import {Observable} from "rxjs";
import {IOrder} from "../shared/interfaces/IOrder";
import {Store} from "@ngrx/store";
import {selectCurrentUser} from "../auth/store/reducers/reducers";
import {Router} from "@angular/router";
import {authActions} from "../auth/store/actions/action";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private store: Store,
    private router: Router
  ) {};
  orders$: Observable<IOrder[]>;
  currentUser$ = this.store.select(selectCurrentUser);
  isLoaded: boolean = false;

  ngOnInit() {
    this.orders$ = this.orderService.getOrders();
  };

  logout() {
    this.store.dispatch(authActions.logout());
    if (this.currentUser$) {
      this.router.navigate(['/insideLoginUser']).then();
    }
    this.router.navigate(['/']).then();
  };
}
