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
  isFailed$: Boolean = false;

  initializeForm() {
    this.form = this.fb.group({
      clientName: [null, Validators.maxLength(160)],
      clientPhone: [null,
        [
          Validators.required,
          Validators.maxLength(14)
        ]
      ],
      clientOrderDate: null
    })
  };

  ngOnInit() {
    this.initializeForm();
  };

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.form.patchValue({'clientOrderDate': new Date()});
    const data: IOrder = this.form.getRawValue();

    this.orderService.putOrder(data).subscribe({
      next: () => {
        this.isSent$ = true;
        this.form.reset();
      },
      error: () => {
        this.isFailed$ = true;
        this.form.reset();
      }
    })
  }
}
