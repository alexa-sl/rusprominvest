import {createActionGroup, props} from "@ngrx/store";
import {IRegisterRequest} from "../../types/IRegisterRequest";
import {IUser} from "../../../shared/interfaces/IUser";
import {IBackendErrors} from "../../../shared/interfaces/IBackendErrors";

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<IRegisterRequest>(),
    'Register success': props<{user: IUser}>(),
    'Register failure': props<{errors: IBackendErrors}>(),
    Login: props<IRegisterRequest>(),
    'Login success': props<{user: IUser}>(),
    'Login failure': props<{errors: IBackendErrors}>()
  }
})
// export const register = createAction(
//   '[Auth] Register',
//   props<IRegisterRequest>()
//   );

