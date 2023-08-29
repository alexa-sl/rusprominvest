import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Store} from "@ngrx/store";
import {authActions} from "../auth/store/actions/action";
import {IRegisterRequest} from "../auth/types/IRegisterRequest";
import {selectIsSubmitting} from "../auth/store/reducers/reducers";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit  {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store
  ) {}

  form: FormGroup;
  isSubmitting$ = this.store.select(selectIsSubmitting);

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
    this.store.dispatch(authActions.register(request));
  };

  registration(data: IRegisterRequest) {
    this.authService.registration(data).subscribe({
      next: (res) => {console.log('registration', res)}
    });
  }
}
