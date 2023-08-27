import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit  {
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
    this.registration();
  };

  registration() {
    this.authService.registration(this.form.value).subscribe({
      next: (res) => {console.log('registration', res)}
    });
  }
}
