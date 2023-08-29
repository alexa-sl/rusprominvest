import {createFeature, createReducer, on} from "@ngrx/store";
import {IAuthState} from "../../types/IAuthState";
import {authActions} from "../actions/action";

const initialState: IAuthState = {
  isSubmitting: false
};
const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(authActions.register, state => ({...state, isSubmitting: true}))
  )
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting
} = authFeature;
