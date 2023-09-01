import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {IRegisterRequest} from "../auth/types/IRegisterRequest";
import {authActions} from "../auth/store/actions/action";
import {Store} from "@ngrx/store";
import {selectCurrentUser, selectIsSubmitting, selectValidationErrors} from "../auth/store/reducers/reducers";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit  {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store
  ) {}

  form: FormGroup;
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    validationErrors: this.store.select(selectValidationErrors),
    currentUser: this.store.select(selectCurrentUser)
  });

  ngOnInit() {
    this.initForm();
  }

  initForm () {
    this.form = this.fb.group({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  onSubmit () {
    const request: IRegisterRequest = this.form.getRawValue();
    this.store.dispatch(authActions.login(request));
  };

  logout() {
    this.store.dispatch(authActions.logout());
  }
}
