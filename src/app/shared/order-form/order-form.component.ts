import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {OrderService} from "../services/order.service";
import {IOrder} from "../interfaces/IOrder";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.sass']
})



export class OrderFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private orderService: OrderService
  ) {}

  form: FormGroup;
  isSent$: Boolean = false;

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
    if (this.form.invalid) {
      return;
    }
    const data: IOrder = this.form.value;

    this.orderService.putOrder(data).subscribe({
      next: () => {
        this.isSent$ = true;
        this.form.reset();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
