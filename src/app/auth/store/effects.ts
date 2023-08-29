import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {AuthService} from "../../shared/services/auth.service";
import {authActions} from "./actions/action";
import {catchError, map, of, switchMap} from "rxjs";
import {IUser} from "../../shared/interfaces/IUser";

export const refisterEffects = createEffect((
  actions$ = inject(Actions),
  authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authActions.register),
    switchMap((request) => {
      return authService.registration(request).pipe(
        map((currentUser: IUser) => {
          return authActions.registerSuccess();
        }),
        catchError(() => {
          return of(authActions.registerFailure());
        })
      )
    })
  );
}, {functional: true});
