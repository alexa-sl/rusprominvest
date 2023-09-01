import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {AuthService} from "../../shared/services/auth.service";
import {authActions} from "./actions/action";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {IUser} from "../../shared/interfaces/IUser";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

export const registerEffects = createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService),
  router = inject(Router)
) => {
  return actions$.pipe(
    ofType(authActions.register),
    switchMap((request) => {
      return authService.registration(request).pipe(
        map((currentUser: IUser) => {
          console.log('registered user', currentUser);
          localStorage.setItem('token', currentUser.accessToken);
          return authActions.registerSuccess({user: currentUser});
        }),
        tap(() => router.navigate(['/insideGetOrders'])),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(authActions.registerFailure({
            errors: errorResponse.error.errors
          }));
        })
      )
    })
  );
}, {functional: true});

export const loginEffects = createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService),
  router = inject(Router)
) => {
  return actions$.pipe(
    ofType(authActions.login),
    switchMap((request) => {
      return authService.login(request).pipe(
        map((currentUser: IUser) => {
          console.log('logged user', currentUser);
          localStorage.setItem('token', currentUser.accessToken);
          return authActions.loginSuccess({user: currentUser});
        }),
        tap(() => router.navigate(['/insideGetOrders'])),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(authActions.loginFailure({
            errors: errorResponse.error.errors
          }));
        })
      )
    })
  );
}, {functional: true});

export const logoutEffects = createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authActions.logout),
    switchMap(() => {
      return authService.logout().pipe(
        map(() => {
          console.log('logged user');
          localStorage.removeItem('token');
          return authActions.logoutSuccess();
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(authActions.logoutFailure({
            errors: errorResponse.error.errors
          }));
        })
      )
    })
  );
}, {functional: true});

export const refreshEffects = createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authActions.refresh),
    switchMap(() => {
      return authService.refresh().pipe(
        map((currentUser: IUser) => {
          localStorage.setItem('token', currentUser.accessToken);
          return authActions.refreshSuccess({user: currentUser});
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(authActions.refreshFailure({
            errors: errorResponse.error.errors
          }));
        })
      )
    })
  );
}, {functional: true});
