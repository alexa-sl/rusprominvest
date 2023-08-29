import {Component, Input, OnInit} from '@angular/core';
import {IBackendErrors} from "../interfaces/IBackendErrors";

@Component({
  selector: 'app-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.sass']
})
export class BackendErrorsComponent implements OnInit {
  @Input() backendErrors: IBackendErrors;

  errorMessages: string[] = [];

  ngOnInit() {
    const errors = this.backendErrors['errors'];

    if (errors) {
      this.errorMessages = errors.map((error) => error.msg);
    }
  }

}
