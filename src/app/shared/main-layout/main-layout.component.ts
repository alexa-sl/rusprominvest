import {Component, OnInit} from '@angular/core';
import {combineLatest} from "rxjs";
import {Store} from "@ngrx/store";
import {selectCurrentUser} from "../../auth/store/reducers/reducers";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent implements OnInit{
 constructor(private store: Store) {}
  active = false;
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser)
  });

  ngOnInit() {
    this.active = false;
  };
  onBurgerClicked() {
    this.active = !this.active;
  }
}
