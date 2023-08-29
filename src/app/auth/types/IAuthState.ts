import {IUser} from "../../shared/interfaces/IUser";
import {IBackendErrors} from "../../shared/interfaces/IBackendErrors";

export interface IAuthState {
  isSubmitting: boolean,
  currentUser: IUser | null | undefined,
  isLoading: boolean,
  validationErrors: IBackendErrors | null
}
