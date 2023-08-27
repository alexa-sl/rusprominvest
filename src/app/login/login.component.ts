import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit  {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  form: FormGroup;

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
    this.login();
  };

  login() {
    this.authService.login(this.form.value).subscribe({
      next: (res) => {console.log(res)}
    });
  }
}
