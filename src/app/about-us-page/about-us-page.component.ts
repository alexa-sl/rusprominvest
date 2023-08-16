import { Component } from '@angular/core';
import {ISlide} from "../shared/image-slider/image.slider/types/ISlide";

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.sass']
})
export class AboutUsPageComponent {

  slides: ISlide[] = [
    {url: './assets/img/certificates.png', title: 'certificates'},
    {url: './assets/img/employees.png', title: 'certificates'},
    {url: './assets/img/legal.png', title: 'certificates'}
  ]
}
