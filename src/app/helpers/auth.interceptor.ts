import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import {catchError, mergeMap, Observable, take} from "rxjs";
import {Store} from "@ngrx/store";
import {IUser} from "../shared/interfaces/IUser";
import {selectCurrentUser} from "../auth/store/reducers/reducers";
import {Injectable} from "@angular/core";
import {authActions} from "../auth/store/actions/action";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  newCurrentUser: IUser | null | undefined;
  currentUser = this.store.select(selectCurrentUser);
  currentUser$ = this.currentUser.subscribe({
    next: (res) => {
      this.newCurrentUser = res;
    }
  });

  isRetry: boolean = false;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.currentUser.pipe(
      take(1),
      mergeMap(user => {
        req = req.clone({
          setHeaders: {Authorization: `Bearer ${user?.accessToken}`}
        });

        return next.handle(req).pipe(
          catchError((err) => {
            if (err.status === 403) {
              console.log('нет права доступа');
            }
            if (err.status === 401 && !this.isRetry) {
              this.isRetry = true;
              req = req.clone({
                setHeaders: {Authorization: `Bearer ${this.newCurrentUser?.accessToken}`}
              });
              this.store.dispatch(authActions.refresh());
              if (this.newCurrentUser) {
                localStorage.setItem('token', this.newCurrentUser.accessToken);
              }
            }
            return next.handle(req);
          })
        )
      })
    )
  }
}

