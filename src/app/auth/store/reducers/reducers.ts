import {createFeature, createReducer, on} from "@ngrx/store";
import {IAuthState} from "../../types/IAuthState";
import {authActions} from "../actions/action";

const initialState: IAuthState = {
  isSubmitting: false,
  isLoading: false,
  currentUser: undefined,
  validationErrors: null
};
const authFeature= createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, state => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })),
    on(authActions.registerSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.user,
      validationErrors: null
    })),
    on(authActions.registerFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })),
    on(authActions.login, state => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })),
    on(authActions.loginSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.user,
      validationErrors: null
    })),
    on(authActions.loginFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })),
    on(authActions.logout, state => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })),
    on(authActions.logoutSuccess, (state) => ({
      ...state,
      isSubmitting: false,
      currentUser: null,
      validationErrors: null
    })),
    on(authActions.logoutFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })),
    on(authActions.refresh, state => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })),
    on(authActions.refreshSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.user,
      validationErrors: null
    })),
    on(authActions.refreshFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    }))
  )
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectCurrentUser,
  selectValidationErrors
} = authFeature;
