import {CanActivateFn, Router} from '@angular/router';
import {Store} from "@ngrx/store";
import {selectCurrentUser} from "../auth/store/reducers/reducers";
import {inject, Injectable} from "@angular/core";
import {AuthService} from "../shared/services/auth.service";
import {IUser} from "../shared/interfaces/IUser";

@Injectable({providedIn: "root"})
class permissionService {
  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store
  ) {
  }

  currentUser: IUser | null | undefined;
  data$ = this.store.select(selectCurrentUser).subscribe({
    next: (res) => {
      this.currentUser = res;
    }
  });

  canActivate() {
    // if(this.currentUser?.accessToken) {
      return true;
    // }
    //
    // this.router.navigate(['/login']).then();
    // this.store.dispatch(authActions.logout());
    // return false;
  }
}

export const AuthGuard: CanActivateFn = (): boolean => {
  return inject(permissionService).canActivate();
}
