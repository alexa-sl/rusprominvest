import {Component, OnInit} from '@angular/core';
import {combineLatest, filter} from "rxjs";
import {Store} from "@ngrx/store";
import {selectCurrentUser} from "../../auth/store/reducers/reducers";
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent implements OnInit {
 constructor(private store: Store, private router: Router) {}
  active = false;
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser)
  });

  ngOnInit() {
    this.active = false;
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.active = false;
    })
  };
  onBurgerClicked() {
    this.active = !this.active;
  }

}
