import {Store} from "@ngrx/store";
import {authActions} from "../auth/store/actions/action";
import {take} from "rxjs";
import {selectCurrentUser} from "../auth/store/reducers/reducers";

export function appInitializer(store: Store) {
  if (localStorage.getItem('token')) {
    store.dispatch(authActions.refresh());
    return () => new Promise(resolve => {
      let currentUser$ = store.select(selectCurrentUser);

      currentUser$
        .pipe(take(1))
        .subscribe({
          next: () => {
            resolve('');
          }
        });
    });
  }
  return () => true;
}
