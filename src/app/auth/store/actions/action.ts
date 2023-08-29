import {createAction, createActionGroup, emptyProps, props} from "@ngrx/store";
import {IRegisterRequest} from "../../types/IRegisterRequest";
import {IUser} from "../../../shared/interfaces/IUser";

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<IRegisterRequest>(),
    'Register success': props<IUser>,
    'Register failure': emptyProps()
  }
})
export const register = createAction(
  '[Auth] Register',
  props<IRegisterRequest>()
  )
