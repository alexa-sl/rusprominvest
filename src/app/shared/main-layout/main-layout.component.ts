import { Component } from '@angular/core';
import {combineLatest} from "rxjs";
import {Store} from "@ngrx/store";
import {selectCurrentUser} from "../../auth/store/reducers/reducers";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.sass']
})
export class MainLayoutComponent {
 constructor(private store: Store) {}

  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser)
  });

}
