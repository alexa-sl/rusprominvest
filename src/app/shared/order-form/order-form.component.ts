import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.sass']
})



export class OrderFormComponent implements OnInit{
  constructor(private fb: FormBuilder){}

  form: FormGroup;
  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      name: [null],
      phone: [null, [Validators.required, Validators.pattern('[- +()0-9]+')]]
    })
  }

  onSubmit() {
    console.log('on submit', this.form.value)
  }
}
