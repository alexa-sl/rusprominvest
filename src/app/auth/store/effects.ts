import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {AuthService} from "../../shared/services/auth.service";
import {authActions} from "./actions/action";
import {catchError, map, of, switchMap} from "rxjs";
import {IUser} from "../../shared/interfaces/IUser";
import {HttpErrorResponse} from "@angular/common/http";

export const registerEffects = createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authActions.register),
    switchMap((request) => {
      return authService.registration(request).pipe(
        map((currentUser: IUser) => {
          return authActions.registerSuccess({user: currentUser});
        }),
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
  authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authActions.login),
    switchMap((request) => {
      return authService.login(request).pipe(
        map((currentUser: IUser) => {
          return authActions.loginSuccess({user: currentUser});
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(authActions.loginFailure({
            errors: errorResponse.error.errors
          }));
        })
      )
    })
  );
}, {functional: true});
